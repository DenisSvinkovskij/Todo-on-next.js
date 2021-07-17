import { FC, useEffect, MouseEvent, useState } from "react";
import { IConfirmDeletingModal } from "../types";
import { createPortal } from "react-dom";
import IconClose from "../public/cross.svg";

const ConfirmDeletingModal: FC<IConfirmDeletingModal> = ({
  isOpen,
  onClose,
  callback,
}) => {
  const modalRoot = document.getElementById("modal");
  const body = document.querySelector("body");

  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (e: any) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      body?.classList.add("lock");
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        body?.classList.remove("lock");
      };
    }
  }, [body?.classList, isOpen, onClose]);

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    modalRoot &&
    createPortal(
      <div
        className="fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-50"
        onClick={handleOverlayClick}
      >
        <div className="relative bg-white p-8 md:w-1/2 w-full">
          <IconClose
            onClick={handleOverlayClick}
            width="20"
            height="20"
            className="fill-current absolute right-1 top-1 cursor-pointer stroke-0"
          />
          <p className="text-center font-medium text-lg mb-3 break-all">
            Confirm deleting todo please!
          </p>
          <button
            type="button"
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
              callback(e);
              onClose();
            }}
            className="w-1/2 border-2 hover:bg-green-500 focus:bg-green-500 transition-all p-1 "
          >
            Delete
          </button>
          <button
            type="button"
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
              if (e.currentTarget === e.target) {
                onClose();
              }
            }}
            className="w-1/2 border-2 hover:bg-green-500 focus:bg-green-500 transition-all p-1 "
          >
            Cancel
          </button>
        </div>
      </div>,
      modalRoot
    )
  );
};

export default ConfirmDeletingModal;
