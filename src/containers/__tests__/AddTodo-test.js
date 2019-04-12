import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, fireEvent } from "react-testing-library";
import { TodoVisibilityFilters } from "../../actions";
import AddTodo from "../AddTodo";
import reducer from "../../reducers";

const defaultInitialState = {
  filters: {
    filterType: TodoVisibilityFilters.SHOW_ALL
  },
  todos: []
};

function renderWithRedux(ui, initialState) {
  const store = createStore(reducer, initialState);
  store.dispatch = jest.fn();

  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}

describe("when submitting a todo item", () => {
  it("should send an action when submitted", () => {
    const { container, store } = renderWithRedux(
      <AddTodo />,
      defaultInitialState
    );

    fireEvent.change(container.querySelector("input"), {
      target: {value: 'Add more tests!'}
    });
    fireEvent.click(container.querySelector("button"));

    expect(store.dispatch.mock.calls[0][0]).toEqual({
      type: "ADD_TODO",
      text: "Add more tests!"
    });
  });
});
