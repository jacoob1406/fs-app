import { AddNewItemActionNames } from './AddNewItemActionNames';
import { AppError } from '../../../common/model/AppError';

export interface AddNewItemBody {
  category: string;
  text: string;
}

export interface AddNewItemAction {
  type: AddNewItemActionNames;
  body?: AddNewItemBody;
  error?: AppError;
}
