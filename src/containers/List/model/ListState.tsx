import { AppError } from '../../../common/model/AppError';

export interface ListItem {
  id: string;
  text: string;
  isCompleted: boolean;
  category: string;
}

export interface ListState {
  isLoading: boolean;
  isSorted: boolean;
  data: ListItem[];
  error: AppError;
}
