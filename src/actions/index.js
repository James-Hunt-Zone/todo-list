export const TodoVisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const addTodo = text => ({
  type: "ADD_TODO",
  text
});

export const toggleTodoStatus = id => ({
  type: "TOGGLE_TODO",
  id
});

export const setTodoListFilter = filter => ({
  type: "SET_TODO_LIST_FILTER",
  filter
});
