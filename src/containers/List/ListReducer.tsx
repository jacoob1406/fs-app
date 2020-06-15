import { ListState } from './model/ListState';
import { ListAction } from './model/ListAction';
import { ListActionNames } from './model/ListActionNames';
import { AppError } from '../../common/model/AppError';

const initialState: ListState = {
  isLoading: false,
  isSorted: false,
  data: [],
  error: null as any,
};

export default (
  state: ListState = initialState,
  action: ListAction
): ListState => {
  switch (action.type) {
    case ListActionNames.FETCH: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ListActionNames.FETCH_SUCCESS: {
      return {
        ...state,
        data: action.payload!,
        isLoading: false,
      };
    }
    case ListActionNames.FETCH_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.error as AppError,
      };
    }
    case ListActionNames.SORT: {
      return {
        ...state,
        isSorted: action.isSorted!,
      };
    }
    default:
      return state;
  }
};
