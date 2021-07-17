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
  deleteTodo(e: React.MouseEvent): void;
  toggleCompleted(id: number): void;
  onEdit(id: number, text: string): void;
}

export interface ITodoList {
  todos: ITodo[];
}

export interface IEditingModal {
  isOpen: boolean;
  onClose(): void;
  onEdit(text: string): void;
}
