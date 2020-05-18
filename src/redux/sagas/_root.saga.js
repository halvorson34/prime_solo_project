import { all } from "redux-saga/effects";
import loginSaga from "./login.saga";
import registrationSaga from "./registration.saga";
import tasksSaga from "./tasks.saga";
import doggosSaga from "./doggos.saga";
import feedbackSaga from "./feedback.saga";
import volunteerSaga from "./volunteer.saga";
import adminSaga from "./admin.saga";
import newsSaga from "./news.saga";

export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    tasksSaga(),
    doggosSaga(),
    feedbackSaga(),
    volunteerSaga(),
    adminSaga(),
    newsSaga(),
  ]);
}
