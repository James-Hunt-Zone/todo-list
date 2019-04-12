import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { toggleTodoStatus, TodoVisibilityFilters } from "../actions";

const getTodos = state => {
  const todos = state.todos;

  if (state.filters.filterType === TodoVisibilityFilters.SHOW_COMPLETED) {
    return todos.filter(todo => todo.completed);
  }

  if (state.filters.filterType === TodoVisibilityFilters.SHOW_ACTIVE) {
    return todos.filter(todo => !todo.completed);
  }

  return todos;
};

const mapStateToProps = state => ({
  todos: getTodos(state)
});

const mapDispatchToProps = dispatch => ({
  toggleTodoStatus: id => dispatch(toggleTodoStatus(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
