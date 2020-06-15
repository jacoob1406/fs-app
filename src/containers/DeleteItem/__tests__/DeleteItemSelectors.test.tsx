import {
  selectDeleteIsLoading,
  selectDeleteError,
} from '../DeleteItemSelectors';
import { DeleteItemState } from '../model/DeleteItemState';
import { RootState } from '../../../common/model/RootState';

const testState: DeleteItemState = {
  isLoading: true,
  error: new Error('some error'),
};

const testAppState = {
  deleteItemReducer: testState,
} as RootState;

describe('Selectors for deleteItemReducer', () => {
  it('selects isLoading ', () => {
    const isLoading = selectDeleteIsLoading(testAppState);
    expect(isLoading).toEqual(true);
  });
  it('selects error', () => {
    const error = selectDeleteError(testAppState);
    expect(error).toEqual(new Error('some error'));
  });
});
