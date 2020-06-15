import { DeleteItemState } from './model/DeleteItemState';
import { DeleteItemAction } from './model/DeleteItemAction';
import { DeleteItemActionNames } from './model/DeleteItemActionNames';

const initialState: DeleteItemState = {
  isLoading: false,
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
        error: action.error,
      };
    }
    default:
      return state;
  }
};
