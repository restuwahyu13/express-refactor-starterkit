import { Model, InjectRepository, Repository } from  '@helpers/helper.dependecyInjection'
import { Users } from '@entities/entitie.users'

@Model()
export class UsersModel {
  constructor(@InjectRepository(Users) public repository: Repository<Users>) {}
}
