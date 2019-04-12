import { render, fireEvent } from "react-testing-library";
import React from "react";
import AddTodoForm from "../AddTodoForm";

describe("AddTodoForm", () => {
  it("should render", () => {
    const { container } = render(<AddTodoForm />);

    expect(container.querySelectorAll("input").length).toEqual(1);
    expect(container.querySelectorAll("button").length).toEqual(1);
  });

  it("should clear the input when submitted", () => {
    const mockOnSubmit = jest.fn();
    const { container } = render(<AddTodoForm onSubmit={mockOnSubmit} />);

    fireEvent.change(container.querySelector("input"), {
      target: { value: "Hello" }
    });

    expect(container.querySelector("input").value).toEqual("Hello");

    fireEvent.change(container.querySelector("button"), {
      target: { value: "Add more tests!" }
    });
    fireEvent.click(container.querySelector("button"));

    expect(container.querySelector("input").value).toEqual("");
    expect(mockOnSubmit.mock.calls.length).toEqual(1);
  });
});
