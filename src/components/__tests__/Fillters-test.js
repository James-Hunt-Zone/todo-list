import { render } from "react-testing-library";
import { createStore } from "redux";
import { Provider } from "react-redux";
import React from "react";
import reducer from "../../reducers";
import Filters from "../Filters";

describe("AddTodoForm", () => {
  it("should render 3 buttons", () => {
    const store = createStore(reducer, {});
    const { container } = render(
      <Provider store={store}>
        <Filters />
      </Provider>
    );

    expect(container.querySelectorAll("button").length).toEqual(3);
  });
});
