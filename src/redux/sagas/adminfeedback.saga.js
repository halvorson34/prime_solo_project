import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getFeedback(action) {
  try {
    const response = yield axios.get("/api/template/adminfeedback");
    yield put({
      type: "SET_FEEDBACK",
      payload: response.data,
    });
  } catch (err) {
    console.warn(err);
  }
}

function* deleteFeedback(action) {
  try {
    yield axios.delete(
      `/api/template/adminfeedback/:id/${action.payload.feedbackId}`
    );
    yield put({ type: "GET_ADMINFEEDBACK" });
  } catch (err) {
    console.warn(err);
  }
}

function* adminFeedbackSaga() {
  yield takeLatest("GET_ADMINFEEDBACK", getFeedback);
  yield takeLatest("DELETE_ADMINFEEDBACK", deleteFeedback);
}

export default adminFeedbackSaga;
