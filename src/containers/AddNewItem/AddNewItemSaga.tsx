import { call, put, takeLatest } from 'redux-saga/effects';
import { AddNewItemActionNames } from './model/AddNewItemActionNames';
import axios from 'axios';
// import { AddNewItemAction } from './model/AddNewItemAction';
import { SagaIterator } from 'redux-saga';
import { AddNewItemBody } from './model/AddNewItemAction';

const addNewItem = (values: AddNewItemBody) =>
  axios.post('http://localhost:4000/api/list/new', values);

function* addNewItemWorkerSaga(action: any): SagaIterator {
  try {
    yield call(addNewItem, action.body);
    yield put({
      type: AddNewItemActionNames.ADD_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: AddNewItemActionNames.ADD_ERROR,
      message: error.message,
    });
  }
}

function* addNewItemSaga() {
  yield takeLatest(AddNewItemActionNames.ADD, addNewItemWorkerSaga);
}

export default addNewItemSaga;
