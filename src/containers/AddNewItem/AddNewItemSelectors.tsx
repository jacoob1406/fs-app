import { createSelector } from 'reselect';
import { RootState } from '../../common/model/RootState';
import { AddNewItemState } from './model/AddNewItemState';

const selectFromAddItemReducer = (state: RootState) => state.addNewItemReducer;

export const selectAddItemIsLoading = createSelector(
  selectFromAddItemReducer,
  (substate: AddNewItemState) => substate.isLoading
);

export const selectAddItemError = createSelector(
  selectFromAddItemReducer,
  (substate: AddNewItemState) => substate.error
);
