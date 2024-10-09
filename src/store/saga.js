import { call, put, takeLatest } from "redux-saga/effects";

import {
  FETCH_USERS_REQUEST,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "./actions";

function* fetchUsers() {
  try {
    const res = yield call(fetch, "https://fakestoreapi.com/products");
    const data = yield res.json();
    yield put(fetchUsersSuccess(data));
  } catch (err) {
    yield put(fetchUsersFailure(err.message));
  }
 }

function* userSaga() {
  yield takeLatest(FETCH_USERS_REQUEST, fetchUsers);
}

export default userSaga;
