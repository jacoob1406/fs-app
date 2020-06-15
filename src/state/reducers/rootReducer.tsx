import { combineReducers } from 'redux';
import listReducer from '../../containers/List/ListReducer';
import deleteItemReducer from '../../containers/DeleteItem/DeleteItemReducer';

export default combineReducers({
  listReducer,
  deleteItemReducer,
});
