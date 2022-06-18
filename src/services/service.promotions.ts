import { StatusCodes as status } from 'http-status-codes'

import { Promotions } from '@entities/entitie.promotions'
import { Inject, Service, Repository } from '@helpers/helper.di'
import { apiResponse } from '@helpers/helper.apiResponse'

@Service()
export class PromotionsService {
  constructor(@Inject('PromotionsModel') public model: Repository<Promotions>) {}

  async getAllPromotions(): Promise<any> {
    try {
      const getAllPromotions: Promotions[] = await this.model.find({})
      return Promise.resolve(apiResponse(status.OK, 'Promotions already to use', getAllPromotions, null))
    } catch (e: any) {
      return Promise.reject(apiResponse(e.stat_code || status.BAD_REQUEST, e.stat_message || e.message))
    }
  }
}
