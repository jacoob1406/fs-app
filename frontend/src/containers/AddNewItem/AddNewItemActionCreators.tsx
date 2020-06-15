import { AddNewItemActionNames } from './model/AddNewItemActionNames';
import { AddNewItemBody } from './model/AddNewItemAction';

export const addNewListItem = (body: AddNewItemBody) => ({
  type: AddNewItemActionNames.ADD,
  body,
});
