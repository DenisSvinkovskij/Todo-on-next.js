import type { NextApiRequest, NextApiResponse } from "next";
import { ITodo } from "../../types";
import { todos } from "../../todos";

export default function deleteTodo(req: NextApiRequest, res: NextApiResponse) {
  const { id } = JSON.parse(req.body);

  if (req.method === "DELETE") {
    const idx = todos.findIndex((item) => item.id === id);

    todos.splice(idx, 1);

    return res.status(204);
  }
  return res.status(400);
}
