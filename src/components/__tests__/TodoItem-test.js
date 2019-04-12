import { render, fireEvent } from "react-testing-library";
import React from "react";
import TodoItem from "../TodoItem";

describe("TodoItem", () => {
  it("should render", () => {
    const { container } = render(<TodoItem>Eat an apple</TodoItem>);

    expect(container.querySelector("li").innerHTML).toEqual("Eat an apple");
  });

  it("should call the onClick handler", () => {
    const mockOnSubmit = jest.fn();
    const { container } = render(
      <TodoItem onClick={mockOnSubmit}>Eat an apple</TodoItem>
    );

    fireEvent.click(container.querySelector("li"));

    expect(mockOnSubmit.mock.calls.length).toEqual(1);
  });

  it("should show as completed", () => {
    const { container } = render(
      <TodoItem completed="true">Eat an apple</TodoItem>
    );

    expect(container.querySelector("li").style.textDecoration).toEqual(
      "line-through"
    );
  });
});
