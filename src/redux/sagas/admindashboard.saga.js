import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

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
}

export default adminDashboardSaga;
