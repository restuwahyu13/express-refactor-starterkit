import { Request, Response, Handler, NextFunction } from 'express'
import { OutgoingMessage } from 'http'

import { UsersService } from '@services/service.users'
import { Controller, Inject } from '@helpers/helper.di'
import { APIResponse } from '@helpers/helper.apiResponse'

@Controller()
export class UsersController {
  constructor(@Inject('UsersService') private service: UsersService) {}

  getAllUsers(): Handler {
    return async (req: Request, res: Response, next: NextFunction): Promise<OutgoingMessage> => {
      try {
        const response: APIResponse = await this.service.getAllUsers()
        return res.status(response.stat_code).json(response)
      } catch (e: any) {
        return res.status(e.stat_code).json(e)
      }
    }
  }
}
