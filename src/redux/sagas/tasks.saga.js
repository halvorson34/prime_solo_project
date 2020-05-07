import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getTasks(action) {
  try {
    const response = yield axios.get("/api/template");
    yield put({
      type: "SET_TASKS",
      payload: response.data,
    });
  } catch (err) {
    console.warn(err);
  }
}

function* tasksSaga() {
  yield takeLatest("GET_TASKS", getTasks);
}

export default tasksSaga;
