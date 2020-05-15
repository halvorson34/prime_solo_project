import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getFeedback(action) {
  try {
    const response = yield axios.get("/api/feedback/");
    yield put({
      type: "SET_FEEDBACK",
      payload: response.data,
    });
  } catch (err) {
    console.warn(err);
  }
}

function* saveFeedback(action) {
  try {
    yield axios.post("/api/feedback/", action.payload);
    yield put({ type: "GET_FEEDBACK" });
  } catch (err) {
    console.warn(err);
  }
}

function* deleteFeedback(action) {
  try {
    yield axios.delete(action.payload);
    yield put({
      type: "GET_FEEDBACK",
    });
  } catch (err) {
    console.warn(err);
  }
}

function* feedbackSaga() {
  yield takeLatest("SAVE_FEEDBACK", saveFeedback);
  yield takeLatest("GET_FEEDBACK", getFeedback);
  yield takeLatest("DELETE_FEEDBACK", deleteFeedback);
}

export default feedbackSaga;
