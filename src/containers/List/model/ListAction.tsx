import { ListActionNames } from './ListActionNames';
import { ListItem } from './ListState';

export interface ListAction {
  type: ListActionNames;
  payload: ListItem[];
  isSorted: boolean;
  //   error?: AppError
}
