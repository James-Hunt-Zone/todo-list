import React from "react";

const TodoItem = ({ children, completed, onClick }) => {
  const style = {
    textDecoration: completed ? "line-through" : "none"
  };

  return (
    <li onClick={onClick} style={style}>
      {children}
    </li>
  );
};

export default TodoItem;
