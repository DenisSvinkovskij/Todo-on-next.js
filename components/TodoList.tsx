import React from "react";
import { ITodo } from "../types";
import TodoItem from "./TodoItem";

interface ITodoList {
  todos: ITodo[];
  onDelete(e: React.MouseEvent, id: number): void;
  toggleCompleted(id: number): void;
}

const TodoList: React.FC<ITodoList> = ({
  todos,
  onDelete,
  toggleCompleted,
}) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          item={todo}
          key={todo.id}
          deleteTodo={(e) => onDelete(e, todo.id)}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </ul>
  );
};

export default TodoList;
