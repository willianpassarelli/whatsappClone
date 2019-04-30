import * as types from "../actions/types";
const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
  error: "",
  errorSignIn: "",
  formValid: true,
  authFormValid: true,
  loader: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.MDF_EMAIL:
      return { ...state, email: action.payload };
    case types.MDF_PASSWORD:
      return { ...state, password: action.payload };
    case types.MDF_NAME:
      return { ...state, name: action.payload };
    case types.ERROR_SIGNUP:
      return { ...state, error: action.payload };
    case types.SUCCESS_SIGNUP:
      return {
        ...state,
        name: "",
        email: "",
        password: "",
        formValid: true
      };
    case types.ERROR_SIGNIN:
      return { ...state, errorSignIn: action.payload };
    case types.SUCCESS_SIGNIN:
      return { ...state, ...INITIAL_STATE };
    case types.ERROR_BOX_SIGNUP:
      return { ...state, formValid: false, loader: false };
    case types.ERROR_BOX_SIGNIN:
      return { ...state, authFormValid: false, loader: false };
    case types.SUCCESS_LOADER:
      return { ...state, loader: true };
    default:
      return state;
  }
};
