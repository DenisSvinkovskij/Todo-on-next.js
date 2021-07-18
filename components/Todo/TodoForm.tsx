import { FC, useState, ChangeEvent, KeyboardEvent } from "react";
import PencilSVG from "../../public/pencil.svg";
import { ITodo, ITodoList } from "../../types";

const TodoForm: FC<ITodoList> = ({ todos, setTodos }) => {
  const [input, setInput] = useState<string>("");

  const addTodoHandler = (text: string): void => {
    const todo: ITodo = {
      text,
      id: Date.now(),
      completed: false,
    };

    fetch(`http://localhost:3000/api/addTodo`, {
      method: "POST",
      body: JSON.stringify(todo),
    })
      .then((data) => data.json())
      .then((newTodo) => setTodos([newTodo, ...todos]))
      .catch(console.log);
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPres = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter" && input !== "") {
      addTodoHandler(input);
      setInput("");
    }
  };

  return (
    <div className="container mx-auto  relative mb-4 md:w-6/12  w-full ">
      <PencilSVG
        className="material-icons create-icon prefix absolute top-2 left-1 cursor-pointer"
        onClick={() => {
          if (input !== "") {
            addTodoHandler(input);
            setInput("");
          }
        }}
        width="22"
        height="22"
      />
      <input
        type="text"
        id="autocomplete-input"
        className="w-full p-2 pl-8 border"
        value={input}
        onChange={handleChangeInput}
        onKeyPress={handleKeyPres}
        placeholder="Task"
      />
    </div>
  );
};

export default TodoForm;
