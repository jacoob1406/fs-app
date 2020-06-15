import { AddNewItemActionNames } from './AddNewItemActionNames';

export interface AddNewItemBody {
  category: string;
  text: string;
}

export interface AddNewItemAction {
  type: AddNewItemActionNames;
  body?: AddNewItemBody;
  error?: Error;
}
