import { all } from "redux-saga/effects";
import loginSaga from "./login.saga";
import registrationSaga from "./registration.saga";
import userSaga from "./user.saga";
import tasksSaga from "./tasks.saga";
import doggosSaga from "./doggos.saga";
import feedbackSaga from "./feedback.saga";
import volProfileSaga from "./volprofile.saga";
import volDashboardSaga from "./voldashboard.saga";

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    tasksSaga(),
    doggosSaga(),
    feedbackSaga(),
    volProfileSaga(),
    volDashboardSaga(),
  ]);
}
