import { render, fireEvent } from "react-testing-library";
import React from "react";
import Button from "../Button";

describe("AddTodoForm", () => {
  it("should render", () => {
    const { container } = render(<Button>My Button</Button>);

    expect(container.querySelectorAll("button").length).toEqual(1);
    expect(container.querySelector("button").innerHTML).toEqual('My Button');
  });

  it("should call the onClick handler", () => {
    const mockOnSubmit = jest.fn();
    const { container } = render(<Button onClick={mockOnSubmit}>My Button</Button>);

    fireEvent.click(container.querySelector('button'));

    expect(mockOnSubmit.mock.calls.length).toEqual(1);
  });
});
