import { Request, Response } from "express"
import responseCode from "../constant/responseCode"

import { getAccount } from "../modal/user.modal"

export const accountController = async (req: Request, res: Response) => {
  try {
    const account: any = await getAccount()

    res.status(responseCode.SUCCESS).json({GTS: account, message: 'Ok'})
  } catch (error) {
    res.status(error.status).json({ message: error.message })
  }
}