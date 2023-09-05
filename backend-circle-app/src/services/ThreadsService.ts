import { Repository } from "typeorm";
import { Threads } from "../entities/Thread";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { createThreadSchema, updateThreadSchema } from "../utils/validators/Thread";

class ThreadsService {
  private readonly ThreadRepository:Repository<Threads> =
    AppDataSource.getRepository(Threads)

  async find(req: Request, res: Response): Promise<Response> {
    try {
      const threads = await this.ThreadRepository.find()
      return res.status(200).json(threads)
    } catch (err) {
      return res.status(500).json({ Error: "Error while getting threads" })
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id, 10)
      const thread = await this.ThreadRepository.findOne({where: {
        id: id
      }})
      return res.status(200).json(thread)
    } catch (err) {
      return res.status(500).json({ Error: "Error while getting thread by Id" })
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body

      const { error } = createThreadSchema.validate(data)
      
      if (error) return res.status(400).json({error: error})

      const thread = this.ThreadRepository.create({
        content: data.content,
        image: data.image
      })

      const createThread = this.ThreadRepository.save(thread)

      return res.status(200).json(createThread)
    } catch (err) {
      return res.status(500).json({ Error: "Error while inserting thread" })
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id)

      const thread = await this.ThreadRepository.findOne({where: {
        id: id
      }})

      if(!thread) {
        return res.status(400).json("Thread ID not found")
      }

      const data = req.body
      const { error } = updateThreadSchema.validate(data)

      if (error) return res.status(400).json({error: error})
      if (data.content != "") thread.content = data.content
      if (data.image != "") thread.image = data.image

      const updatedThread = this.ThreadRepository.save(thread)
      
      return res.status(200).json(updatedThread)
    } catch (err) {
      return res.status(500).json({ Error: "Error while updating thread" })
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try{
      const id = parseInt(req.params.id)

      const thread = await this.ThreadRepository.findOne({where: {
        id: id
      }})

      if(!thread) return res.status(400).json("Data by id not found")
      
      const deleteData = this.ThreadRepository.delete(id)

      return res.status(200).json(deleteData)
    } catch (err) {
      return res.status(500).json({ Error: "Error while deleting thread" })
    }
  }
}

export default new ThreadsService