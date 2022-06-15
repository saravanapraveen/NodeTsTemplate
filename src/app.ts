import express, {Request, Response} from 'express'
import * as bodyParser from "body-parser"
import * as dotenv from "dotenv"

import userRouter from './route/user.route'

const app = express()

dotenv.config()

app.use(bodyParser.json())

app.use('/', userRouter)

app.listen(process.env.PORT, () => {
  return console.log(`Listening at http://localhost:${process.env.PORT}`)
})