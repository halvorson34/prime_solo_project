import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* saveFeedback(action) {
  try {
    yield axios.post("/api/template/", action.payload);
    yield put({ type: "GET_FEEDBACK" });
  } catch (err) {
    console.warn(err);
  }
}

function* feedbackSaga() {
  yield takeLatest("SAVE_FEEDBACK", saveFeedback);
}

export default feedbackSaga();
