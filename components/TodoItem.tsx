import React from "react";
import { ITodo } from "../types";

interface ITodoItem {
  item: ITodo;
  deleteTodo(e: React.MouseEvent): void;
  toggleCompleted(id: number): void;
}

const TodoItem: React.FC<ITodoItem> = ({
  item,
  deleteTodo,
  toggleCompleted,
}) => {
  return (
    <li className="list-item">
      <label className="label">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => toggleCompleted(item.id)}
        />
        <span>{item.text}</span>
        <i className="material-icons prefix  delete-icon" onClick={deleteTodo}>
          delete
        </i>
      </label>
    </li>
  );
};

export default TodoItem;
