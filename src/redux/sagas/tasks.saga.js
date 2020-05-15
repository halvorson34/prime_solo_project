import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getTasks(action) {
  try {
    const response = yield axios.get("/api/tasks/");
    yield put({
      type: "SET_TASKS",
      payload: response.data,
    });
  } catch (err) {
    console.warn(err);
  }
}

function* saveTasks(action) {
  try {
    yield axios.post("/api/tasks/", action.payload);
    yield put({ type: "GET_TASKS" });
  } catch (err) {
    console.warn(err);
  }
}

function* tasksSaga() {
  yield takeLatest("GET_TASKS", getTasks);
  yield takeLatest("SAVE_TASKS", saveTasks);
}

export default tasksSaga;
