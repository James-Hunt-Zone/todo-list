import reducer from "../filters";

describe("filters reducer", () => {
  it("should have a default state", () => {
    expect(reducer(undefined, {})).toEqual({
      filterType: "SHOW_ALL"
    });
  });

  it("should handle SET_TODO_LIST_FILTER", () => {
    const action = {
      type: 'SET_TODO_LIST_FILTER',
      filter: 'xzy'
    }

    expect(reducer(undefined, action)).toEqual({
      filterType: "xzy"
    });
  });
});

