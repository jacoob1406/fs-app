import { ListState } from "./model/ListState";
import { ListAction } from "./model/ListAction";
import { ListActionNames } from "./model/ListActionNames";

const initialState: ListState = {
  isLoading: false,
  data: [],
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
        data: action.payload,
        isLoading: false,
      };
    }
    case ListActionNames.FETCH_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
