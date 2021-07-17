import { FC, MouseEvent } from "react";
import { ITodoList } from "../../types";
import TodoItem from "./TodoItem";

const TodoList: FC<ITodoList> = ({ todos }) => {
  console.log(todos);

  const deleteTodoHandler = (e: MouseEvent, id: number) => {
    e.preventDefault();
    if (window.confirm("Confirm deleting please")) {
      fetch(`http://localhost:3000/api/deleteTodo`, {
        method: "DELETE",
        body: `{"id":${id}}`,
      });
    }
  };

  const toggleCompleted = (id: number) => {
    fetch(`http://localhost:3000/api/toggleCompletedTodo`, {
      method: "PATCH",
      body: `{"id":${id}}`,
    });
  };

  const editTodoHandler = (id: number, text: string) => {
    // setTodos(
    //   todos.map((todo) => {
    //     if (todo.id === id) {
    //       todo.text = text;
    //     }
    //     return todo;
    //   })
    // );
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

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/getAllTodos`);
  const todos = await res.json();
  console.log(todos);

  return {
    props: { todos }, // will be passed to the page component as props
  };
}
