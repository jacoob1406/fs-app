import { AddNewItemState } from './model/AddNewItemState';
import { AddNewItemAction } from './model/AddNewItemAction';
import { AddNewItemActionNames } from './model/AddNewItemActionNames';

const initialState: AddNewItemState = {
  isLoading: false,
};

export default (
  state: AddNewItemState = initialState,
  action: AddNewItemAction
): AddNewItemState => {
  switch (action.type) {
    case AddNewItemActionNames.ADD: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case AddNewItemActionNames.ADD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case AddNewItemActionNames.ADD_ERROR: {
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
