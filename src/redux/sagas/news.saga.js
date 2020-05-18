import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getNews(action) {
  try {
    const response = yield axios.get("/api/news/");
    yield put({
      type: "SET_NEWS",
      payload: response.data,
    });
  } catch (err) {
    console.warn(err);
  }
}

function* saveNews(action) {
  try {
    yield axios.post("/api/news/", action.payload);
    yield put({ type: "GET_NEWS" });
  } catch (err) {
    console.warn(err);
  }
}

function* deleteNews(action) {
  try {
    yield axios.delete(action.payload);
    yield put({
      type: "GET_NEWS",
    });
  } catch (err) {
    console.warn(err);
  }
}

function* newsSaga() {
  yield takeLatest("GET_NEWS", getNews);
  yield takeLatest("SAVE_NEWS", saveNews);
  yield takeLatest("DELETE_NEWS", deleteNews);
}

export default newsSaga;
