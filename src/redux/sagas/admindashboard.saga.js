import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* saveMessage(action) {
  try {
    yield axios.post("/api/template/admindashboard", action.payload);
    yield put({ type: "GET_MESSAGE" });
  } catch (err) {
    console.warn(err);
  }
}

function* getAdminDashboard(action) {
  try {
    const response = yield axios.get("/api/template/admindashboard");
    yield put({
      type: "SET_ADMINDASHBOARD",
      payload: response.data,
    });
  } catch (err) {
    console.warn(err);
  }
}

function* adminDashboardSaga() {
  yield takeLatest("GET_ADMINDASHBOARD", getAdminDashboard);
  yield takeLatest("SAVE_MESSAGE", saveMessage);
}

export default adminDashboardSaga;
