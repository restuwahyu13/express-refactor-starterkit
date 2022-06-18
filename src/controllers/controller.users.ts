import { Request, Response } from 'express'
import { OutgoingMessage } from 'http'

import { UsersService } from '@services/service.users'
import { Controller, Inject } from '@libs/lib.di'
import { APIResponse } from '@helpers/helper.apiResponse'

@Controller()
export class UsersController {
  constructor(@Inject('UsersService') private service: UsersService) {}

  async ping(req: Request, res: Response): Promise<OutgoingMessage> {
    try {
      const response: APIResponse = await this.service.ping()
      return res.status(response.stat_code).json(response)
    } catch (e: any) {
      return res.status(e.stat_code).json(e)
    }
  }
}
