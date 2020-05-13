import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getVolDashboard(action) {
  try {
    const response = yield axios.get("/api/template/voldashboard");
    yield put({
      type: "SET_VOLDASHBOARD",
      payload: response.data,
    });
  } catch (err) {
    console.warn(err);
  }
}

function* volDashboardSaga() {
  yield takeLatest("GET_VOLDASHBOARD", getVolDashboard);
}

export default volDashboardSaga;
