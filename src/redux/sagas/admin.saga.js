import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getAdmin(action) {
  try {
    const response = yield axios.get("/api/admin/");
    yield put({
      type: "SET_ADMIN",
      payload: response.data,
    });
  } catch (err) {
    console.warn(err);
  }
}

function* adminSaga() {
  yield takeLatest("GET_ADMIN", getAdmin);
}

export default adminSaga;
