import { Request, Response } from "express";
import { createUserService } from "../../services/users";

export const createUserControler = async (req: Request, resp: Response) => {
  const returnedUser = await createUserService(req.body);
  return resp.status(201).json(returnedUser);
};