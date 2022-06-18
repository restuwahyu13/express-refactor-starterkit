import { Router } from 'express'
import { ObjectLiteral } from 'typeorm'

import { Container, Injectable, Registry, TypeContainer } from '@libs/lib.di'
import { UsersModel } from '@models/model.users'
import { UsersModule } from '@modules/module.users'

@Registry([
  {
    token: 'UsersModule',
    useFactory: (): Router => {
      return Container.resolve(UsersModule).route.main()
    }
  },
  {
    token: 'UsersModel',
    useFactory: (): ObjectLiteral => {
      return TypeContainer.get(UsersModel).repository
    }
  }
])
@Injectable()
export class AppModule {}
