import { ListActionNames } from './ListActionNames';
import { ListItem } from './ListState';
import { AppError } from '../../../common/model/AppError';

export interface ListAction {
  type: ListActionNames;
  payload?: ListItem[];
  isSorted?: boolean;
  error?: AppError;
}
