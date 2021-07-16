import React, { useState } from "react";
import { ITodo } from "../../types";
import Modal from "../Modal";

interface ITodoItem {
  item: ITodo;
  deleteTodo(e: React.MouseEvent): void;
  toggleCompleted(id: number): void;
  onEdit(id: number, text: string): void;
}

const TodoItem: React.FC<ITodoItem> = ({
  item,
  deleteTodo,
  toggleCompleted,
  onEdit,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleEditTodo = (text: string) => {
    onEdit(item.id, text);
  };

  return (
    <>
      <li className="mb-2  shadow-md ">
        <label className="flex justify-between items-center space-x-4  p-2 pl-4 pr-4 ">
          <input
            type="checkbox"
            className="cursor-pointer "
            checked={item.completed}
            onChange={() => toggleCompleted(item.id)}
          />
          <p className=" break-all">{item.text}</p>
          <div className="flex flex-nowrap">
            <i
              className="material-icons  prefix cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setIsModalOpen(true);
              }}
            >
              mode_edit
            </i>
            <i
              className="material-icons prefix  delete-icon text-red-500 ml-2 cursor-pointer"
              onClick={deleteTodo}
            >
              delete
            </i>
          </div>
        </label>
      </li>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onEdit={handleEditTodo}
        />
      )}
    </>
  );
};

export default TodoItem;
