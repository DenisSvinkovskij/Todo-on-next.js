import Head from "next/head";
// import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { ITodo } from "../types";
import Header from "../components/Header";

const Home: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos") || "[]"));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log("use");
  }, [todos]);

  const addTodoHandler = (text: string): void => {
    const todo: ITodo = {
      text,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => [todo, ...prev]);
  };

  const deleteTodoHandler = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    if (window.confirm("Confirm deleting please")) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  const toggleCompleted = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const editTodoHandler = (id: number, text: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.text = text;
        }
        return todo;
      })
    );
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Header />
        <TodoForm onAdd={addTodoHandler} />
        <TodoList
          todos={todos}
          onDelete={deleteTodoHandler}
          toggleCompleted={toggleCompleted}
          onEdit={editTodoHandler}
        />
      </main>
    </>
  );
};

export default Home;
