import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getVolProfile(action) {
  try {
    const response = yield axios.get("/api/template/profile");
    yield put({
      type: "SET_VOLPROFILE",
      payload: response.data,
    });
  } catch (err) {
    console.warn(err);
  }
}

function* volProfileSaga() {
  yield takeLatest("GET_VOLPROFILE", getVolProfile);
}

export default volProfileSaga;
