import * as types from "./types";
import { firebaseAuth, firebaseDatabase } from "../../utils/firebase";
import NavigationService from "../../services/NavigationService";
import b64 from "base-64";

export const modifyEmail = text => {
  return {
    type: types.MDF_EMAIL,
    payload: text
  };
};

export const modifyPassword = text => {
  return {
    type: types.MDF_PASSWORD,
    payload: text
  };
};

export const modifyName = text => {
  return {
    type: types.MDF_NAME,
    payload: text
  };
};

export const signUp = ({ name, email, password }) => {
  return dispatch => {
    dispatch({ type: types.SUCCESS_LOADER });

    // Adicionado o Timeout para disparar o erro após a animação do Loader ser exibida
    setTimeout(() => {
      dispatch({ type: types.ERROR_BOX_SIGNUP });
    }, 2000);
    firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        emailb64 = b64.encode(email);
        firebaseDatabase
          .ref(`/contacts/${emailb64}`)
          .push({ name })
          .then(value => signUpSuccess(dispatch));
      })
      .catch(error => signUpError(error, dispatch));
  };
};

const signUpSuccess = dispatch => {
  dispatch({ type: types.SUCCESS_SIGNUP });
  dispatch(() => {
    NavigationService.navigate("App");
  });
};

const signUpError = (error, dispatch) => {
  dispatch({ type: types.ERROR_SIGNUP, payload: error.message });
};

export const authUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: types.SUCCESS_LOADER });

    // Adicionado o Timeout para disparar o erro após a animação do Loader ser exibida
    setTimeout(() => {
      dispatch({ type: types.ERROR_BOX_SIGNIN });
    }, 2000);
    firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(value => signInSuccess(dispatch))
      .catch(error => signInError(error, dispatch));
  };
};

const signInSuccess = dispatch => {
  dispatch({ type: types.SUCCESS_SIGNIN });
  dispatch(() => {
    NavigationService.navigate("App");
  });
};

const signInError = (error, dispatch) => {
  dispatch({ type: types.ERROR_SIGNIN, payload: error.message });
};
