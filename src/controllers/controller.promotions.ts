import { Request, Response, Handler, NextFunction } from 'express'
import { OutgoingMessage } from 'http'

import { PromotionsService } from '@services/service.promotions'
import { Controller, Inject } from '@helpers/helper.di'
import { APIResponse } from '@helpers/helper.apiResponse'

@Controller()
export class PromotionsController {
  constructor(@Inject('PromotionsService') private service: PromotionsService) {}

  getAllPromotions(): Handler {
    return async (req: Request, res: Response, next: NextFunction): Promise<OutgoingMessage> => {
      try {
        const response: APIResponse = await this.service.getAllPromotions()
        return res.status(response.stat_code).json(response)
      } catch (e: any) {
        return res.status(e.stat_code).json(e)
      }
    }
  }
}
