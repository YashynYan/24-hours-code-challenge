import { combineReducers } from "redux";
import dialogReducer from "./dialogReducer";
import experienceOptionsReducer from "./experienceOptionsReducer";
import experiencesReducer from "./experiencesReducer";

const reducers = combineReducers({
  experienceOptions: experienceOptionsReducer,
  dialog: dialogReducer,
  experiences: experiencesReducer,
});

export default reducers;
