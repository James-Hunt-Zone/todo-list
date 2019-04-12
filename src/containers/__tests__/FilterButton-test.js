import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, fireEvent } from "react-testing-library";
import { TodoVisibilityFilters } from "../../actions";
import FilterButton from "../FilterButton";
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
      <FilterButton filterType="mock-filter-type" />,
      defaultInitialState
    );

    fireEvent.click(container.querySelector("button"));

    expect(store.dispatch.mock.calls[0][0]).toEqual({
      type: "SET_TODO_LIST_FILTER",
      filter: "mock-filter-type"
    });
  });
});
