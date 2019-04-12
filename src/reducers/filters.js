import { TodoVisibilityFilters } from "../actions";

const defaultState = {
  filterType: TodoVisibilityFilters.SHOW_ALL
};

const filters = (state = defaultState, action = null) => {
  switch (action.type) {
    case "SET_TODO_LIST_FILTER":
      return {
        ...state,
        filterType: action.filter
      };
    default:
      return state;
  }
};

export default filters;
