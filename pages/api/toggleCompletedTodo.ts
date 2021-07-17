import type { NextApiRequest, NextApiResponse } from "next";
import { ITodo } from "../../types";
import { todos } from "../../todos";

type Data = ITodo;

export default function addTodo(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = JSON.parse(req.body);

  if (req.method === "PATCH") {
    const newTodos = todos.reduce((acc, item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return [...acc, item];
    }, []);

    return res.status(200);
  }
  return res.status(400);
}
