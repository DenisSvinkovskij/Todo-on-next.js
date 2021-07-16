import { FC, useState, ChangeEvent, KeyboardEvent } from "react";
import PencilSVG from "../../public/pencil.svg";

interface ITodoForm {
  onAdd(text: string): void;
}

const TodoForm: FC<ITodoForm> = ({ onAdd }) => {
  const [input, setInput] = useState<string>("");

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPres = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter" && input !== "") {
      onAdd(input);
      setInput("");
    }
  };

  return (
    <div className="container mx-auto  relative mb-4 md:w-6/12  w-full ">
      <PencilSVG
        className="material-icons create-icon prefix absolute top-2 left-1 cursor-pointer"
        onClick={() => {
          if (input !== "") {
            onAdd(input);
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
