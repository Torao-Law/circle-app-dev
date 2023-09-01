import * as express from "express"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"


AppDataSource.initialize()
    .then(async () => {
        const app = express()
        const port = 5000
        const router = express.Router()

        app.use(express.json)
        app.use("/api/v1", router)

        app.get("/", (req: Request, res: Response) => {
            res.send("Hello World")
        })

        app.listen(port, () => {
            console.log(`Server started on port ${port}`)
        })
    })
    .catch(error => console.log(error))
