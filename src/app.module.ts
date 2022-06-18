import { Router } from 'express'
import { registry as Registry } from 'tsyringe'

import { Container, Injectable } from '@libs/lib.di'
import { UsersModule } from '@modules/module.users'

@Registry([
  {
    token: 'UsersModule',
    useFactory: (): Router => {
      return Container.resolve(UsersModule).route.main()
    }
  }
])
@Injectable()
export class AppModule {}
