import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getDoggos(action) {
  try {
    const response = yield axios.get("/api/template/dogs");
    yield put({
      type: "SET_DOGGOS",
      payload: response.data,
    });
  } catch (err) {
    console.warn(err);
  }
}

function* doggosSaga() {
  yield takeLatest("GET_DOGGOS", getDoggos);
}

export default doggosSaga;
