import * as express from 'express'
import { Request, Response } from 'express'
import ThreadsController from '../controllers/ThreadsController'

const router = express.Router()

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello world"
  })
})

router.get("/threads", ThreadsController.find)

export default router