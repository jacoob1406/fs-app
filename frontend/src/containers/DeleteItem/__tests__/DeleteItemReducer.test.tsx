import reducer from '../DeleteItemReducer';
import { DeleteItemState } from '../model/DeleteItemState';
import { DeleteItemAction } from '../model/DeleteItemAction';
import { DeleteItemActionNames } from '../model/DeleteItemActionNames';

const state: DeleteItemState = {
  isLoading: false,
  error: null as any,
};

describe('DeleteItemReducer', () => {
  it('return initial state', () => {
    expect(reducer(undefined, {} as DeleteItemAction)).toEqual(state);
  });
  it('should handle DELETE', () => {
    expect(reducer(state, { type: DeleteItemActionNames.DELETE })).toEqual({
      ...state,
      isLoading: true,
    });
  });
  it('should handle DELETE_SUCCESS', () => {
    expect(
      reducer(state, { type: DeleteItemActionNames.DELETE_SUCCESS })
    ).toEqual({
      ...state,
      isLoading: false,
    });
  });

  it('should handle DELETE_ERROR', () => {
    expect(
      reducer(state, {
        type: DeleteItemActionNames.DELETE_ERROR,
        error: new Error('some error'),
      })
    ).toEqual({
      ...state,
      isLoading: false,
      error: new Error('some error'),
    });
  });
});
