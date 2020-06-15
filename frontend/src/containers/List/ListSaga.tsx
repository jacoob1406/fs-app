import { call, put, takeLatest } from 'redux-saga/effects';
import { ListActionNames } from './model/ListActionNames';
import axios from 'axios';
import { DeleteItemActionNames } from '../DeleteItem/model/DeleteItemActionNames';
import { AddNewItemActionNames } from '../AddNewItem/model/AddNewItemActionNames';

const getListData = () => axios.get('http://localhost:4000/api/list');

function* fetchListDataWorkerSaga() {
  try {
    const response = yield call(getListData);
    yield put({ type: ListActionNames.FETCH_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: ListActionNames.FETCH_ERROR, error });
  }
}

function* fetchListDataSaga() {
  yield takeLatest(ListActionNames.FETCH, fetchListDataWorkerSaga);
  yield takeLatest(AddNewItemActionNames.ADD_SUCCESS, fetchListDataWorkerSaga);
  yield takeLatest(
    DeleteItemActionNames.DELETE_SUCCESS,
    fetchListDataWorkerSaga
  );
}

export default fetchListDataSaga;
