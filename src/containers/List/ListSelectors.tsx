import { createSelector } from 'reselect';
import { RootState } from '../../common/model/RootState';
import { ListState, ListItem } from './model/ListState';

const selectFromListReducer = (state: RootState) => state.listReducer;

export const selectListIsLoading = createSelector(
  selectFromListReducer,
  (substate: ListState) => substate.isLoading
);

export const selectListData = createSelector(
  selectFromListReducer,
  (substate: ListState) => {
    if (substate.isSorted) {
      return substate.data.sort((a: ListItem, b: ListItem) =>
        a.category.localeCompare(b.category)
      );
    }
    return substate.data.sort((a: ListItem, b: ListItem) =>
      a.id.localeCompare(b.id)
    );
  }
);

export const selectListIsSorted = createSelector(
  selectFromListReducer,
  (substate: ListState) => substate.isSorted
);
