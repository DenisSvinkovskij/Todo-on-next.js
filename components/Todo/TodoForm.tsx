import React, { useState } from "react";

interface ITodoForm {
  onAdd(text: string): void;
}

const TodoForm: React.FC<ITodoForm> = ({ onAdd }) => {
  const [input, setInput] = useState<string>("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPres = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter" && input !== "") {
      onAdd(input);
      setInput("");
    }
  };

  return (
    <div className="container mx-auto w-6/12 relative mb-4">
      <i
        className="material-icons create-icon prefix absolute top-2 left-1 cursor-pointer"
        onClick={() => {
          if (input !== "") {
            onAdd(input);
            setInput("");
          }
        }}
      >
        mode_edit
      </i>
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
