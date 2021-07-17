import { FC, MouseEvent } from "react";
import { ITodoList } from "../../types";
import TodoItem from "./TodoItem";

const TodoList: FC<ITodoList> = ({ todos }) => {
  const deleteTodoHandler = (e: MouseEvent, id: number) => {
    e.preventDefault();
    fetch(`http://localhost:3000/api/deleteTodo`, {
      method: "DELETE",
      body: `{"id":${id}}`,
    });
  };

  const toggleCompleted = (id: number) => {
    const body = { id: id };
    fetch(`http://localhost:3000/api/toggleCompletedTodo`, {
      method: "PATCH",
      body: JSON.stringify(body),
    })
      .then((data) => data.json())
      .then((res) => {
        todos.forEach((todo) => {
          if (todo.id === res.id) {
            todo.completed = !todo.completed;
          }
        });
      });
  };

  const editTodoHandler = (id: number, text: string, completed: boolean) => {
    const body = { id: id, text: text, completed: completed };
    fetch(`http://localhost:3000/api/editTodo`, {
      method: "PUT",
      body: JSON.stringify(body),
    })
      .then((data) => data.json())
      .then((res) => {
        todos.forEach((todo) => {
          if (todo.id === res.id) {
            todo.text = text;
          }
        });
      });
  };
  return (
    <ul className="container mx-auto md:w-6/12 space-y-3 w-full pt-5">
      {todos.map((todo) => (
        <TodoItem
          item={todo}
          key={todo.id}
          deleteTodo={(e) => deleteTodoHandler(e, todo.id)}
          toggleCompleted={toggleCompleted}
          onEdit={editTodoHandler}
        />
      ))}
    </ul>
  );
};

export default TodoList;
