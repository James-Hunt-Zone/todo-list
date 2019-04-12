import React, { Component } from "react";

class AddTodoForm extends Component {
  state = {
    inputValue: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    const newTodo = this.state.inputValue;

    this.setState({ inputValue: "" });
    this.props.onSubmit(newTodo);
  };

  handleOnChange = e => {
    const inputValue = e.target.value;
    this.setState({ inputValue });
  };

  render() {
    const { inputValue } = this.state;
    const disabled = inputValue.length === 0;

    return (
      <form onSubmit={this.handleSubmit}>
        <input value={inputValue} onChange={this.handleOnChange} type="text" />
        <button disabled={disabled} type="submit">
          Add
        </button>
      </form>
    );
  }
}

export default AddTodoForm;
