import { Request, Response, Handler, NextFunction } from 'express'
import { OutgoingMessage } from 'http'

import { UsersService } from '@services/service.users'
import { Controller, Inject } from '@libs/lib.di'
import { APIResponse } from '@helpers/helper.apiResponse'

@Controller()
export class UsersController {
  constructor(@Inject('UsersService') private service: UsersService) {}

  getAllUsers(): Handler {
    return async (req: Request, res: Response, next: NextFunction): Promise<OutgoingMessage> => {
      try {
        const response: APIResponse = await this.service.getAllUsers()
        return res.status(200).json(response)
      } catch (e: any) {
        return res.status(400).json(e)
      }
    }
  }
}
