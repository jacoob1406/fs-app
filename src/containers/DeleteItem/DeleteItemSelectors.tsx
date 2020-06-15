import { createSelector } from 'reselect';
import { RootState } from '../../common/model/RootState';
import { DeleteItemState } from './model/DeleteItemState';

const selectFromListReducer = (state: RootState) => state.deleteItemReducer;

export const selectDeleteIsLoading = createSelector(
  selectFromListReducer,
  (substate: DeleteItemState) => substate.isLoading
);

export const selectDeleteError = createSelector(
  selectFromListReducer,
  (substate: DeleteItemState) => substate.error
);
