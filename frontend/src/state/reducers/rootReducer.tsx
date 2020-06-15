import { combineReducers } from 'redux';
import listReducer from '../../containers/List/ListReducer';
import deleteItemReducer from '../../containers/DeleteItem/DeleteItemReducer';
import addNewItemReducer from '../../containers/AddNewItem/AddNewItemReducer';

export default combineReducers({
  listReducer,
  deleteItemReducer,
  addNewItemReducer,
});
