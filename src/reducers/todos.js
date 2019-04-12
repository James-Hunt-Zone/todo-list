const defaultState = [
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
];

const todos = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const index = new Date().getTime();
      return [
        ...state,
        {
          id: index,
          completed: false,
          text: action.text
        }
      ];
    case "TOGGLE_TODO":
      return [
        ...state.map(todo => {
          return todo.id === action.id
            ? { ...todo, completed: !todo.completed }
            : todo;
        })
      ];
    default:
      return state;
  }
};

export default todos;
