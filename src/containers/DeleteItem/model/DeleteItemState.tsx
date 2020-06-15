import { AppError } from '../../../common/model/AppError';

export interface DeleteItemState {
  isLoading: boolean;
  error?: AppError;
}
