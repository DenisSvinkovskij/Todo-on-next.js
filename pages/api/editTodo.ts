import type { NextApiRequest, NextApiResponse } from "next";
import { ITodo } from "../../types";
import { todos } from "../../todos";

type Data = ITodo;

export default function editTodo(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id, text, completed } = JSON.parse(req.body);

  if (req.method === "PUT") {
    todos.forEach((todo) => {
      if (todo.id === id) {
        todo.text = text;
      }
    });

    return res.status(200).json({ id, text, completed });
  }
  return res.status(400);
}
