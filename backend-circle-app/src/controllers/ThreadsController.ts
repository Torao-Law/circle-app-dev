import { Request, Response } from "express";
import ThreadsService from "../services/ThreadsService";

class ThreadController {
  find(req: Request, res: Response) {
    ThreadsService.find(req, res)
  }
}

export default new ThreadController