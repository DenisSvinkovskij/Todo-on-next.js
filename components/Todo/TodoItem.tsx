import { FC, MouseEvent, useState } from "react";
import { ITodoItem } from "../../types";
import EditingModal from "../EditingModal";
import ConfirmDeletingModal from "../ConfirmDeletingModal";
import PencilSVG from "../../public/pencil.svg";
import DeleteSVG from "../../public/bin2.svg";

const TodoItem: FC<ITodoItem> = ({
  item,
  deleteTodo,
  toggleCompleted,
  onEdit,
}) => {
  const [isEditingModalOpen, setIsEditingModalOpen] = useState<boolean>(false);
  const [isConfirmDeletingModalOpen, setIsConfirmDeletingModalOpen] =
    useState<boolean>(false);

  const handleEditTodo = (text: string) => {
    onEdit(item.id, text, item.completed);
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
              onClick={(e: MouseEvent) => {
                e.preventDefault();
                setIsEditingModalOpen(true);
              }}
              width="22"
              height="22"
            />
            <DeleteSVG
              className="material-icons prefix  delete-icon fill-current text-red-500 ml-2 cursor-pointer"
              onClick={(e: MouseEvent) => {
                e.preventDefault();
                setIsConfirmDeletingModalOpen(true);
              }}
              width="22"
              height="22"
            />
          </div>
        </label>
      </li>
      {isEditingModalOpen && (
        <EditingModal
          isOpen={isEditingModalOpen}
          onClose={() => setIsEditingModalOpen(false)}
          onEdit={handleEditTodo}
        />
      )}
      {isConfirmDeletingModalOpen && (
        <ConfirmDeletingModal
          isOpen={isConfirmDeletingModalOpen}
          onClose={() => setIsConfirmDeletingModalOpen(false)}
          callback={deleteTodo}
        />
      )}
    </>
  );
};

export default TodoItem;
