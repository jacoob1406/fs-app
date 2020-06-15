import { createSelector } from 'reselect';
import { RootState } from '../../common/model/RootState';
import { ListState } from './model/ListState';

const selectFromListReducer = (state: RootState) =>
  state.listReducer;

export const selectListIsLoading = createSelector(
  selectFromListReducer,
  (substate: ListState) => substate.isLoading
);

export const selectListData = createSelector(
  selectFromListReducer,
  (substate: ListState) => substate.data
);
