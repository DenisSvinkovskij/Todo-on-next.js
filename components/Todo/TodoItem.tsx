import { FC, useState } from "react";
import { ITodo } from "../../types";
import Modal from "../Modal";
import PencilSVG from "../../public/pencil.svg";
import DeleteSVG from "../../public/bin2.svg";

interface ITodoItem {
  item: ITodo;
  deleteTodo(e: React.MouseEvent): void;
  toggleCompleted(id: number): void;
  onEdit(id: number, text: string): void;
}

const TodoItem: FC<ITodoItem> = ({
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
            <PencilSVG
              className="material-icons  prefix cursor-pointer"
              onClick={() => {
                setIsModalOpen(true);
              }}
              width="22"
              height="22"
            />
            <DeleteSVG
              className="material-icons prefix  delete-icon fill-current text-red-500 ml-2 cursor-pointer"
              onClick={deleteTodo}
              width="22"
              height="22"
            />
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
