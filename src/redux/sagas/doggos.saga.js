import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getDoggos(action) {
  try {
    const response = yield axios.get("/api/doggos/");
    yield put({
      type: "SET_DOGGOS",
      payload: response.data,
    });
  } catch (err) {
    console.warn(err);
  }
}

function* saveDoggo(action) {
  try {
    yield axios.post("/api/doggos/", action.payload);
    yield put({ type: "GET_DOGGOS" });
  } catch (err) {
    console.warn(err);
  }
}

function* deleteDoggo(action) {
  try {
    yield axios.delete(action.payload);
    yield put({
      type: "GET_DOGGOS",
    });
  } catch (err) {
    console.warn(err);
  }
}

function* doggosSaga() {
  yield takeLatest("GET_DOGGOS", getDoggos);
  yield takeLatest("SAVE_DOGGOS", saveDoggo);
  yield takeLatest("DELETE_DOGGOS", deleteDoggo);
}

export default doggosSaga;
