import { call, put, takeLatest } from 'redux-saga/effects';
import { DeleteItemActionNames } from './model/DeleteItemActionNames';
import axios from 'axios';
// import { DeleteItemAction } from './model/DeleteItemAction';
import { SagaIterator } from 'redux-saga';

const deleteListItem = (id: string) =>
  axios.delete(`http://localhost:4000/api/list/delete/${id}`);

function* deleteItemWorkerSaga(action: any): SagaIterator {
  try {
    yield call(deleteListItem, action.id);
    yield put({
      type: DeleteItemActionNames.DELETE_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: DeleteItemActionNames.DELETE_ERROR,
      message: error.message,
    });
  }
}

function* deleteItemSaga() {
  yield takeLatest(DeleteItemActionNames.DELETE, deleteItemWorkerSaga);
}

export default deleteItemSaga;
