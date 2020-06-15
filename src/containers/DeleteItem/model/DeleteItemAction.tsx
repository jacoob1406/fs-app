import { DeleteItemActionNames } from './DeleteItemActionNames';

export interface DeleteItemAction {
  type: DeleteItemActionNames;
  id?: string;
  error?: Error;
}
