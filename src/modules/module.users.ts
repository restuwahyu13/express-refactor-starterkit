import { singleton as Singleton } from 'tsyringe'

import { UsersService } from '@services/service.users'
import { UsersController } from '@controllers/controller.users'
import { UsersRoute } from '@routes/route.users'
import { Registry, Delay } from '@libs/lib.di'

@Registry([
  { token: 'UsersService', useClass: Delay(() => UsersService) },
  { token: 'UsersController', useClass: Delay(() => UsersController) },
  { token: 'UsersRoute', useClass: Delay(() => UsersRoute) }
])
@Singleton()
export class UsersModule extends UsersRoute {}
