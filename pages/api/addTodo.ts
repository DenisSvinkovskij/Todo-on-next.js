import type { NextApiRequest, NextApiResponse } from "next";
import { ITodo } from "../../types";
import { todos } from "../../todos";

type Data = ITodo;

export default function addTodo(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    todos.push(JSON.parse(req.body));

    return res.status(200).json(req.body);
  }
  return res.status(400);
}
