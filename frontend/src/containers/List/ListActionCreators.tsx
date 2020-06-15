import { ListActionNames } from './model/ListActionNames';

export const getListData = () => ({
  type: ListActionNames.FETCH,
});

export const sortListData = (isSorted: boolean) => ({
  type: ListActionNames.SORT,
  isSorted,
});
