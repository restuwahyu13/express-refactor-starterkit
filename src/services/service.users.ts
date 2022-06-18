import { Repository } from 'typeorm'
import { StatusCodes as status } from 'http-status-codes'

import { Users } from '@models/model.users'
import { Model, ModelTransform } from '@di/di.users'
import { InjectTransform, Service } from '@libs/lib.di'
import { apiResponse } from '@helpers/helper.apiResponse'

@Service()
export class UsersService {
  constructor(@InjectTransform(Model, ModelTransform) private model: Repository<Users>) {}

  async ping(): Promise<any> {
    try {
      const getAllUsers: Users[] = await this.model.find({})
      return Promise.resolve(apiResponse(status.OK, 'Express Rest API Clean Architecture', getAllUsers, null))
    } catch (e: any) {
      return Promise.reject(apiResponse(e.stat_code || status.BAD_REQUEST, e.stat_message || e.message))
    }
  }
}
