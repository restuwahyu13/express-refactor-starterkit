import { Service, Container } from 'typedi'
import { Repository } from 'typeorm'
import { InjectRepository } from 'typeorm-typedi-extensions'

import { Users } from '@models/model.users'
import { Transform } from '@libs/lib.di'

@Service()
class DependencyInjection {
  constructor(@InjectRepository(Users) public repository: Repository<Users>) {}
}

export class Model {
  public getRepository(): Repository<Users> {
    return Container.get(DependencyInjection).repository
  }
}

export class ModelTransform implements Transform<Model, Repository<Users>> {
  public transform(flags: Model): Repository<Users> {
    return flags.getRepository()
  }
}
