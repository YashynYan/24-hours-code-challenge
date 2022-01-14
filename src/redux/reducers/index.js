import { combineReducers } from "redux";
import dialogReducer from "./dialogReducer";
import experiencesReducer from "./experienceReducer";

const reducers = combineReducers({
  experiences: experiencesReducer,
  dialog: dialogReducer
});

export default reducers;
