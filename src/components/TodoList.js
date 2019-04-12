import React from "react";
import TodoItem from "../components/TodoItem";

const TodoList = ({ todos, toggleTodoStatus }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          completed={todo.completed}
          onClick={() => toggleTodoStatus(todo.id)}
        >
          {todo.text}
        </TodoItem>
      ))}
    </ul>
  );
};

export default TodoList;
