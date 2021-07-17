import type { NextApiRequest, NextApiResponse } from "next";
import { ITodoCompletedResponse } from "../../types";
import { todos } from "../../todos";

type Data = ITodoCompletedResponse;

export default function toggleCompletedTodo(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = JSON.parse(req.body);

  if (req.method === "PATCH") {
    todos.forEach((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });

    return res.status(200).json({ id });
  }
  return res.status(400);
}
