import { DeleteItemActionNames } from './DeleteItemActionNames';
import { AppError } from '../../../common/model/AppError';

export interface DeleteItemAction {
  type: DeleteItemActionNames;
  id?: string;
  error?: AppError;
}
