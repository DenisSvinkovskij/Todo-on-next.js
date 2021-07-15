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
    <div className="form-container">
      <i
        className="material-icons edit-icon prefix"
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
        className="input"
        value={input}
        onChange={handleChangeInput}
        onKeyPress={handleKeyPres}
        placeholder="Task"
      />
    </div>
  );
};

export default TodoForm;
