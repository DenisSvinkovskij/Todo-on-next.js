import type { NextApiRequest, NextApiResponse } from "next";
import { ITodo } from "../../types";
import { todos } from "../../todos";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ITodo[]>
) {
  if (req.method === "GET") {
    return res.status(200).json(todos);
  }
  return res.status(400);
}
