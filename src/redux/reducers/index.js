import { combineReducers } from "redux";
import experiencesReducer from "./experienceReducer";

const reducers = combineReducers({
  experiences: experiencesReducer,
});

export default reducers;
