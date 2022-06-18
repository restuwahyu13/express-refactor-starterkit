import { Router } from 'express'
import { ObjectLiteral } from 'typeorm'

import { Container, Injectable, Module, TypeContainer } from '@helpers/helper.dependecyInjection'
import { UsersModel } from '@models/model.users'
import { UsersModule } from '@modules/module.users'

@Module([
  {
    token: 'UsersModel',
    useFactory: (): ObjectLiteral => {
      return TypeContainer.get(UsersModel).repository
    }
  },
  {
    token: 'UsersModule',
    useFactory: (): Router => {
      return Container.resolve(UsersModule).route.main()
    }
  }
])
@Injectable()
export class AppModule {}
