import * as types from "../actions/types";
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LIST_USER_CONTACT:
      return action.payload;
    default:
      return state;
  }
};
