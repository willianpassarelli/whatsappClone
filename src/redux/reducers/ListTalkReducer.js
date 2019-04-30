import * as types from "../actions/types";
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.TALK_LIST_USER:
      return action.payload;
    default:
      return state;
  }
};
