import * as actions from "../";

describe("when calling the action addTodo", () => {
  it("it should return the correct object", () => {
    const value = actions.addTodo("Hi");

    expect(value).toEqual({
      type: "ADD_TODO",
      text: "Hi"
    });
  });
});

describe("when calling the action toggleTodoStatus", () => {
  it("it should return the correct object", () => {
    const value = actions.toggleTodoStatus(123);

    expect(value).toEqual({
      type: "TOGGLE_TODO",
      id: 123
    });
  });
});

describe("when calling the action setTodoListFilter", () => {
  it("it should return the correct object", () => {
    const value = actions.setTodoListFilter("Sunny");

    expect(value).toEqual({
      type: "SET_TODO_LIST_FILTER",
      filter: "Sunny"
    });
  });
});
