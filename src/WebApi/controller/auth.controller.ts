import { Request, Response } from "express";
import ApiResponse from "../utils/responses";
import { getGoals } from "../services/goals.service";

export const signIn = async (req: Request, res: Response) => {
    getGoals().then(res=> {
        console.log(res);
    })
  res.send("¡Hello Wordl!");
};
