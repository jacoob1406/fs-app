import {
  selectAddItemIsLoading,
  selectAddItemError,
} from '../AddNewItemSelectors';
import { AddNewItemState } from '../model/AddNewItemState';
import { RootState } from '../../../common/model/RootState';

const testState: AddNewItemState = {
  isLoading: true,
  error: new Error('404'),
};

const testAppState = {
  addNewItemReducer: testState,
} as RootState;

describe('Selectors for AddNewItemReducer', () => {
  it('selects isLoading ', () => {
    const isLoading = selectAddItemIsLoading(testAppState);
    expect(isLoading).toEqual(true);
  });
  it('selects error', () => {
    const error = selectAddItemError(testAppState);
    expect(error).toEqual(new Error('404'));
  });
});
