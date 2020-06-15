import { DeleteItemState } from './model/DeleteItemState';
import { DeleteItemAction } from './model/DeleteItemAction';
import { DeleteItemActionNames } from './model/DeleteItemActionNames';
import { AppError } from '../../common/model/AppError';

const initialState: DeleteItemState = {
  isLoading: false,
  error: null as any,
};

export default (
  state: DeleteItemState = initialState,
  action: DeleteItemAction
): DeleteItemState => {
  switch (action.type) {
    case DeleteItemActionNames.DELETE: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case DeleteItemActionNames.DELETE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case DeleteItemActionNames.DELETE_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.error as AppError,
      };
    }
    default:
      return state;
  }
};
