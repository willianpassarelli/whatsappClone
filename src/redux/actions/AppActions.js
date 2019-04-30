import * as types from "./types";
import b64 from "base-64";
import _ from "lodash";
import { firebaseAuth, firebaseDatabase } from "../../utils/firebase";

export const changedContactEmail = text => {
  return {
    type: types.ADD_EMAIL,
    payload: text
  };
};

export const newContact = email => {
  emailb64 = b64.encode(email);
  return dispatch => {
    firebaseDatabase
      .ref(`/contacts/${emailb64}`)
      .once("value")
      .then(snapshot => {
        if (snapshot.val()) {
          const userData = _.first(_.values(snapshot.val()));

          const { currentUser } = firebaseAuth;
          emailUserb64 = b64.encode(currentUser.email);
          firebaseDatabase
            .ref(`/user_contacts/${emailUserb64}`)
            .push({ email: email, name: userData.name })
            .then(() => successContact(dispatch))
            .catch(error => errorContact(error.message, dispatch));
        } else {
          // Adicionado o Timeout para disparar o erro após a animação do Loader ser exibida
          setTimeout(() => {
            dispatch({ type: types.ERROR_BOX_ADD });
          }, 2000);

          dispatch({
            type: types.ADD_EMAIL_ERROR,
            payload: "E-mail informado não identificado!"
          });
        }
      });
  };
};

const errorContact = (error, dispatch) =>
  dispatch({
    type: types.ADD_EMAIL_ERROR,
    payload: error
  });

const successContact = dispatch =>
  dispatch({
    type: types.SUCCESS_BOX_ADD,
    payload: false
  });

export const stateNewContact = () => ({
  type: types.SUCCESS_BOX_ADD,
  payload: true
});

export const contactUserFecth = () => {
  const { currentUser } = firebaseAuth;

  return dispatch => {
    emailUserb64 = b64.encode(currentUser.email);

    firebaseDatabase
      .ref(`/user_contacts/${emailUserb64}`)
      .on("value", snapshot => {
        dispatch({ type: types.LIST_USER_CONTACT, payload: snapshot.val() });
      });
  };
};

export const changedMessage = text => {
  return {
    type: types.CG_MESSAGE,
    payload: text
  };
};

export const sendMessage = (message, name, email) => {
  const { currentUser } = firebaseAuth;
  const userEmail = currentUser.email;

  return dispatch => {
    // Conversão b64
    const emailUserb64 = b64.encode(userEmail);
    const emailContactb64 = b64.encode(email);

    firebaseDatabase
      .ref(`/message/${emailUserb64}/${emailContactb64}`)
      .push({ message, type: "s" })
      .then(() => {
        firebaseDatabase
          .ref(`/message/${emailContactb64}/${emailUserb64}`)
          .push({ message, type: "r" })
          .then(() => dispatch({ type: types.SEND_MESSAGE }));
      })
      // armazena o cabeçalho de conversa do usuário autenticado
      .then(() => {
        firebaseDatabase
          .ref(`/user_talks/${emailUserb64}/${emailContactb64}`)
          .set({ name, email });
      })
      // armazena o cabeçalho de conversa do contato
      .then(() => {
        firebaseDatabase
          .ref(`/contacts/${emailUserb64}`)
          .once("value")
          .then(snapshot => {
            const dataUser = _.first(_.values(snapshot.val()));
            firebaseDatabase
              .ref(`/user_talks/${emailContactb64}/${emailUserb64}`)
              .set({ name: dataUser.name, email: userEmail });
          });
      });
  };
};

export const talkUserFetch = email => {
  const { currentUser } = firebaseAuth;
  const userEmail = currentUser.email;

  // Conversão b64
  const emailUserb64 = b64.encode(userEmail);
  const emailContactb64 = b64.encode(email);

  return dispatch => {
    firebaseDatabase
      .ref(`/message/${emailUserb64}/${emailContactb64}`)
      .on("value", snapshot => {
        dispatch({ type: types.TALK_LIST_USER, payload: snapshot.val() });
      });
  };
};

export const chatUserFetch = () => {
  const { currentUser } = firebaseAuth;
  const userEmail = currentUser.email;

  return dispatch => {
    const emailUserb64 = b64.encode(userEmail);

    firebaseDatabase
      .ref(`/user_talks/${emailUserb64}`)
      .on("value", snapshot => {
        dispatch({ type: types.LIST_USER_CHAT, payload: snapshot.val() });
      });
  };
};
