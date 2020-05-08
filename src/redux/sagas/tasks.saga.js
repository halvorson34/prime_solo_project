import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getTasks(action) {
  try {
    console.log("1");
    const response = yield axios.get("/api/template/tasks");
    console.log("2");
    yield put({
      type: "SET_TASKS",
      payload: response.data,
    });
    console.log("3");
  } catch (err) {
    console.warn(err);
  }
}

function* tasksSaga() {
  yield takeLatest("GET_TASKS", getTasks);
}

export default tasksSaga;
