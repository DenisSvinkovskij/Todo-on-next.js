import { Dispatch, SetStateAction, MouseEvent } from "react";

export interface ITodo {
  text: string;
  id: number;
  completed: boolean;
}

export interface ITodoForm {
  onAdd(text: string): void;
}

export interface ITodoItem {
  item: ITodo;
  deleteTodo(e: MouseEvent): void;
  toggleCompleted(id: number): void;
  onEdit(id: number, text: string, completed: boolean): void;
}

export interface ITodoList {
  todos: ITodo[];
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
}

export interface IEditingModal {
  isOpen: boolean;
  onClose(): void;
  onEdit(text: string): void;
}

export interface IConfirmDeletingModal {
  isOpen: boolean;
  onClose(): void;
  callback(e: MouseEvent): void;
}

export interface ITodoCompletedResponse {
  id: number;
}
