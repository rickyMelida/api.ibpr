import { Request, Response } from "express";

export default interface IVerseController {
  getHeaderVerses(req: Request, res: Response) :Promise<void>
} 