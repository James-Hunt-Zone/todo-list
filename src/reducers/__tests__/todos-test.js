import reducer from "../todos";

describe("filters reducer", () => {
  it("should have a default state", () => {
    expect(reducer(undefined, {})).toEqual([
      {
        id: 1,
        text: "Hello",
        completed: false
      },
      {
        id: 2,
        text: "World",
        completed: true
      }
    ]);
  });

  it("should handle SET_TODO_LIST_FILTER", () => {
    const action = {
      type: "ADD_TODO",
      text: "next todo item"
    };

    const result = reducer([], action)[0];

    expect(result.id).toBeTruthy();
    expect(result.completed).toEqual(false);
    expect(result.text).toEqual("next todo item");
  });

  it("should handle TOGGLE_TODO", () => {
    const defaultState = [
      {
        id: 1,
        completed: true,
        text: "James"
      },
      {
        id: 2,
        completed: false,
        text: "Hunt"
      }
    ];

    const action = {
      type: "TOGGLE_TODO",
      id: 2
    };

    const expected = [
      {
        id: 1,
        completed: true,
        text: "James"
      }, {
        id: 2,
        completed: true,
        text: "Hunt"
      }
    ]

    expect(reducer(defaultState, action)).toEqual(expected);
  });
});
