import { AxiosError } from 'axios';

export interface AppError extends Partial<Error & AxiosError> {
  source?: string;
  error?: string;
}
