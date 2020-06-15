import { AppError } from '../../../common/model/AppError';
import { ListItemCategory } from '../../../common/model/ListItemCategory';

export interface ListItem {
  id: string;
  text: string;
  isCompleted: boolean;
  category: ListItemCategory;
}

export interface ListState {
  isLoading: boolean;
  isSorted: boolean;
  data: ListItem[];
  error: AppError;
}
