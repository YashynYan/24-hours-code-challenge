import { CLOSE_DIALOG, LAUNCH_DIALOG } from "../actions/dialogActions";

const defaultState = {};

const dialogReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CLOSE_DIALOG:
      return {};
    case LAUNCH_DIALOG:
      return { dialogType: action.payload.dialogType };
    default:
      return state;
  }
};

export default dialogReducer;
