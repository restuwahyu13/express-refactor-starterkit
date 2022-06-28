import { StatusCodes as status } from 'http-status-codes'

import { Users } from '@entities/entitie.users'
import { Inject, Service, Repository } from '@helpers/helper.di'
import { apiResponse, APIResponse } from '@helpers/helper.apiResponse'

@Service()
export class UsersService {
  constructor(@Inject('UsersModel') private model: Repository<Users>) {}

  async getAllUsers(): Promise<APIResponse> {
    try {
      const getAllUsers: Users[] = await this.model.find({})
      return Promise.resolve(apiResponse(status.OK, 'Users already to use', getAllUsers, null))
    } catch (e: any) {
      return Promise.reject(apiResponse(e.stat_code || status.BAD_REQUEST, e.stat_message || e.message))
    }
  }
}
