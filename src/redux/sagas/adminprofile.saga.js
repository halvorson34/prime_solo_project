import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getAdminProfile(action) {
  try {
    const response = yield axios.get("/api/template/adminprofile");
    yield put({
      type: "SET_ADMINPROFILE",
      payload: response.data,
    });
  } catch (err) {
    console.warn(err);
  }
}

function* adminProfileSaga() {
  yield takeLatest("GET_ADMINPROFILE", getAdminProfile);
}

export default adminProfileSaga;
