import express, { Request, Response, Router } from "express"

import { accountController } from "../controller/user.controller"

const userRouter: Router = express.Router({
  caseSensitive: true,
  strict: true
})

userRouter.get('/account', accountController)

export default userRouter