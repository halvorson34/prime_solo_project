import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getVolunteer(action) {
  try {
    const response = yield axios.get("/api/volunteer/");
    yield put({
      type: "SET_VOLUNTEER",
      payload: response.data,
    });
  } catch (err) {
    console.warn(err);
  }
}

function* volunteerSaga() {
  yield takeLatest("GET_VOLUNTEER", getVolunteer);
}

export default volunteerSaga;
