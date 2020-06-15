import { AppError } from '../../../common/model/AppError';

export interface AddNewItemState {
  isLoading: boolean;
  error: AppError;
}
