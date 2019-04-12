import { render } from "react-testing-library";
import React from "react";
import TodoList from "../TodoList";

describe("TodoList", () => {
  it("should render", () => {
    const items = [
      {
        id: 1,
        completed: true,
        text: "Hello"
      },
      {
        id: 2,
        completed: true,
        text: "James"
      }
    ];
    const { container } = render(<TodoList todos={items} />);

    expect(container.querySelectorAll("li").length).toEqual(2);
  });
});
