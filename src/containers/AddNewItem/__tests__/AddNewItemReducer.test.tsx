import reducer from '../AddNewItemReducer';
import { AddNewItemState } from '../model/AddNewItemState';
import { AddNewItemAction } from '../model/AddNewItemAction';
import { AddNewItemActionNames } from '../model/AddNewItemActionNames';

const state: AddNewItemState = {
  isLoading: false,
  error: null as any,
};

describe('AddNewItemReducer', () => {
  it('return initial state', () => {
    expect(reducer(undefined, {} as AddNewItemAction)).toEqual(state);
  });
  it('should handle DELETE', () => {
    expect(reducer(state, { type: AddNewItemActionNames.ADD })).toEqual({
      ...state,
      isLoading: true,
    });
  });
  it('should handle DELETE_SUCCESS', () => {
    expect(reducer(state, { type: AddNewItemActionNames.ADD_SUCCESS })).toEqual(
      {
        ...state,
        isLoading: false,
      }
    );
  });

  it('should handle DELETE_ERROR', () => {
    expect(
      reducer(state, {
        type: AddNewItemActionNames.ADD_ERROR,
        error: new Error('not added - error'),
      })
    ).toEqual({
      ...state,
      isLoading: false,
      error: new Error('not added - error'),
    });
  });
});
