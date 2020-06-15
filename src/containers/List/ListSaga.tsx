import { call, put, takeLatest } from 'redux-saga/effects';
import { ListActionNames } from './model/ListActionNames';
import axios from 'axios';

const getListData = () => axios.get('http://localhost:4000/api/list');

function* fetchUser() {
  try {
    const response = yield call(getListData);
    yield put({ type: ListActionNames.FETCH_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: ListActionNames.FETCH_ERROR, message: error.message });
  }
}

function* mySaga() {
  yield takeLatest(ListActionNames.FETCH, fetchUser);
}

export default mySaga;
