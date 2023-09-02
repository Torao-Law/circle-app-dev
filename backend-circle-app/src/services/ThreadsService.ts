import { Repository } from "typeorm";
import { Threads } from "../entities/Thread";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";

class ThreadsService {
  private readonly ThreadRepository:Repository<Threads> =
    AppDataSource.getRepository(Threads)

  async find(req: Request, res: Response): Promise<Response> {
    try {
      const threads = await this.ThreadRepository.find()
      return res.status(200).json(threads)
    } catch (err) {
      return res.status(500).json({ Error: "Error while getting threads"})
    }
  }

  // async findOne(req: Request, res: Response): Promise<Response> {
  //   try {
  //     const { id } = req.params
  //     const thread = await this.ThreadRepository.findOne(
  //       where: {
  //         id
  //       }
  //     )
  //     return res.status(200).json(thread)
  //   } catch (err) {

  //   }
  // }
}

export default new ThreadsService