import express, {Request, Response} from 'express'
import * as bodyParser from "body-parser"
import * as dotenv from "dotenv"

const app = express()

dotenv.config()

app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
  res.json({ status: true, message: 'Instance' })
})

app.listen(process.env.PORT, () => {
  return console.log(`Listening at http://localhost:${process.env.PORT}`)
})