import React from "react";

interface PropsInterface {
  name: string;
  completed: boolean;
}

const TodoItemComponent: React.FC<PropsInterface> = ({ name, completed }) => {
  return (
    <li>
      <strong>{name}</strong> <input type="checkbox" checked={completed} />
    </li>
  );
};

export default TodoItemComponent;
