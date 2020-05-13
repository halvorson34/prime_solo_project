import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* saveDoggo(action) {
  try {
    yield axios.post("/api/template/admindoggos", action.payload);
    yield put({ type: "GET_DOGGOS" });
  } catch (err) {
    console.warn(err);
  }
}

function* adminDoggosSaga() {
  yield takeLatest("SAVE_DOGGOS", saveDoggo);
}

export default adminDoggosSaga;
