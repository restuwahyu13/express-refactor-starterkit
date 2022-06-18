import { Model, InjectRepository, Repository } from '@helpers/helper.di'
import { Users } from '@entities/entitie.users'

@Model()
export class UsersModel {
  constructor(@InjectRepository(Users) public model: Repository<Users>) {}
}
