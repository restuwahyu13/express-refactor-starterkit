import { Model, InjectRepository, Repository } from '@libs/lib.di'
import { Users } from '@entities/entitie.users'

@Model()
export class UsersModel {
  constructor(@InjectRepository(Users) public repository: Repository<Users>) {}
}
