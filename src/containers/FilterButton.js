import { connect } from "react-redux";
import Button from "../components/Button";
import { setTodoListFilter } from "../actions";

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setTodoListFilter(ownProps.filterType));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Button);
