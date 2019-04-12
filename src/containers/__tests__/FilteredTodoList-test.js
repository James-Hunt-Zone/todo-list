import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, fireEvent } from "react-testing-library";
import { TodoVisibilityFilters } from "../../actions";
import FilteredTodoList from "../FilteredTodoList";
import reducer from "../../reducers";

const defaultInitialState = {
  filters: {
    filterType: TodoVisibilityFilters.SHOW_ALL
  },
  todos: [
    {
      id: 1,
      text: "Hello",
      completed: false
    },
    {
      id: 2,
      text: "World",
      completed: true
    },
    {
      id: 3,
      text: "!!",
      completed: true
    }
  ]
};

function renderWithRedux(ui, initialState) {
  const store = createStore(reducer, initialState);
  store.dispatch = jest.fn();

  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}

describe("list renders with filter as SHOW_ALL", () => {
  it("should renter all the todo in the state", () => {
    const { container } = renderWithRedux(
      <FilteredTodoList />,
      defaultInitialState
    );

    expect(container.querySelectorAll("li").length).toBe(3);
  });
});

describe("list renders with filter as SHOW_COMPLETED", () => {
  it("should renter all the todo in the state", () => {
    const initialState = {
      ...defaultInitialState,
      filters: {
        filterType: TodoVisibilityFilters.SHOW_COMPLETED
      }
    };

    const { container } = renderWithRedux(<FilteredTodoList />, initialState);

    expect(container.querySelectorAll("li").length).toBe(2);
  });
});

describe("list renders with filter as SHOW_ACTIVE", () => {
  it("should renter all the todo in the state", () => {
    const initialState = {
      ...defaultInitialState,
      filters: {
        filterType: TodoVisibilityFilters.SHOW_ACTIVE
      }
    };

    const { container } = renderWithRedux(
      <FilteredTodoList />,
      initialState
    );

    expect(container.querySelectorAll("li").length).toBe(1);
  });
});

describe("todo items toggle state", () => {
  it("should disptach an action", async () => {
    const { container, store } = renderWithRedux(
      <FilteredTodoList />,
      defaultInitialState
    );

    fireEvent.click(container.querySelectorAll("li")[0]);

    expect(store.dispatch.mock.calls[0][0]).toEqual({
      type: "TOGGLE_TODO",
      id: 1
    });
  });
});
