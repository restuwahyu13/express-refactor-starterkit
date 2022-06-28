import { StatusCodes as status } from 'http-status-codes'

import { Promotions } from '@entities/entitie.promotions'
import { Users } from '@entities/entitie.users'
import { Inject, Service, Repository } from '@helpers/helper.di'
import { apiResponse, APIResponse } from '@helpers/helper.apiResponse'

@Service()
export class PromotionsService {
  constructor(@Inject('PromotionsModel') private model: Repository<Promotions>, @Inject('UsersModel') private usersModel: Repository<Users>) {}

  async getAllPromotions(): Promise<APIResponse> {
    try {
      const getAllPromotions: Promotions[] = await this.model.find({})
      const getAllUsers: Users[] = await this.usersModel.find({})

      const data: Record<string, any> = {
        promotions: getAllPromotions,
        users: getAllUsers
      }

      return Promise.resolve(apiResponse(status.OK, 'Promotions already to use', data, null))
    } catch (e: any) {
      return Promise.reject(apiResponse(e.stat_code || status.BAD_REQUEST, e.stat_message || e.message))
    }
  }
}
