import * as types from "../actions/types";
const INITIAL_STATE = {
  newContactEmail: "",
  errorNotFound: "",
  message: "",
  successNewContact: true,
  contactFormValid: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_EMAIL:
      return { ...state, newContactEmail: action.payload };
    case types.ADD_EMAIL_ERROR:
      return { ...state, errorNotFound: action.payload };
    case types.ERROR_BOX_ADD:
      return { ...state, contactFormValid: false };
    case types.SUCCESS_BOX_ADD:
      return {
        ...state,
        successNewContact: action.payload,
        contactFormValid: true,
        newContactEmail: ""
      };
    case types.CG_MESSAGE:
      return { ...state, message: action.payload };
    case types.SEND_MESSAGE:
      return { ...state, message: "" };
    default:
      return state;
  }
};
