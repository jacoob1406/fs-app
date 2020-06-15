import reducer from '../ListReducer';
import { ListState } from '../model/ListState';
import { ListAction } from '../model/ListAction';
import { ListActionNames } from '../model/ListActionNames';
import { ListItemCategory } from '../../../common/model/ListItemCategory';

const state: ListState = {
  isLoading: false,
  isSorted: false,
  data: [],
  error: null as any,
};

describe('ListReducer', () => {
  it('return initial state', () => {
    expect(reducer(undefined, {} as ListAction)).toEqual(state);
  });
  it('should handle FETCH', () => {
    expect(reducer(state, { type: ListActionNames.FETCH })).toEqual({
      ...state,
      isLoading: true,
    });
  });
  it('should handle FETCH_SUCCESS', () => {
    expect(
      reducer(state, {
        type: ListActionNames.FETCH_SUCCESS,
        payload: [
          {
            id: '1',
            text: 'abc',
            isCompleted: false,
            category: ListItemCategory.FAMILY,
          },
        ],
      })
    ).toEqual({
      ...state,
      isLoading: false,
      data: [
        {
          id: '1',
          text: 'abc',
          isCompleted: false,
          category: ListItemCategory.FAMILY,
        },
      ],
    });
  });

  it('should handle FETCH_ERROR', () => {
    expect(
      reducer(state, {
        type: ListActionNames.FETCH_ERROR,
        error: new Error('internal server error'),
      })
    ).toEqual({
      ...state,
      isLoading: false,
      error: new Error('internal server error'),
    });
  });
});
