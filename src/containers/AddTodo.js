import { connect } from "react-redux";
import AddTodoForm from "../components/AddTodoForm";
import { addTodo } from "../actions";

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: todo => {
    dispatch(addTodo(todo));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AddTodoForm);
