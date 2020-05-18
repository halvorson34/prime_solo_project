import { combineReducers } from "redux";
import errors from "./errors.reducer";
import tasks from "./tasks.reducer";
import doggos from "./doggos.reducer";
import feedback from "./feedback.reducer";
import admin from "./admin.reducer";
import volunteer from "./volunteer.reducer";
import news from "./news.reducer";

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  tasks,
  doggos,
  feedback,
  admin,
  volunteer,
  news,
});

export default rootReducer;
