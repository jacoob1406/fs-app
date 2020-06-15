import {
  selectListIsLoading,
  selectListData,
  selectListIsSorted,
  selectListError,
} from '../ListSelectors';
import { ListState } from '../model/ListState';
import { RootState } from '../../../common/model/RootState';
import { ListItemCategory } from '../../../common/model/ListItemCategory';

const testState: ListState = {
  isLoading: false,
  isSorted: true,
  data: [
    {
      id: '1',
      text: 'abc',
      isCompleted: false,
      category: ListItemCategory.CAREER,
    },
  ],
  error: new Error('403'),
};

const testAppState = {
  listReducer: testState,
} as RootState;

describe('Selectors for ListReducer', () => {
  it('selects isLoading ', () => {
    const isLoading = selectListIsLoading(testAppState);
    expect(isLoading).toEqual(false);
  });
  it('selects data', () => {
    const data = selectListData(testAppState);
    expect(data).toEqual([
      {
        id: '1',
        text: 'abc',
        isCompleted: false,
        category: ListItemCategory.CAREER,
      },
    ]);
  });
  it('selects isSorted', () => {
    const isSorted = selectListIsSorted(testAppState);
    expect(isSorted).toEqual(true);
  });
  it('selects error', () => {
    const error = selectListError(testAppState);
    expect(error).toEqual(new Error('403'));
  });
});
