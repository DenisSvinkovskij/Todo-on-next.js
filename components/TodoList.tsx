import React from "react";
import { ITodo } from "../types";
import TodoItem from "./TodoItem";

interface ITodoList {
  todos: ITodo[];
  onDelete(e: React.MouseEvent, id: number): void;
  toggleCompleted(id: number): void;
  onEdit(id: number, text: string): void;
}

const TodoList: React.FC<ITodoList> = ({
  todos,
  onDelete,
  toggleCompleted,
  onEdit,
}) => {
  return (
    <ul className="container mx-auto w-6/12 ">
      {todos.map((todo) => (
        <TodoItem
          item={todo}
          key={todo.id}
          deleteTodo={(e) => onDelete(e, todo.id)}
          toggleCompleted={toggleCompleted}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

export default TodoList;
