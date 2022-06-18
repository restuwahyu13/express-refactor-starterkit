import { UsersService } from '@services/service.users'
import { UsersController } from '@controllers/controller.users'
import { UsersRoute } from '@routes/route.users'
import { Module, Delay, Injectable, Inject } from '@libs/lib.di'

@Module([
  { token: 'UsersService', useClass: Delay(() => UsersService) },
  { token: 'UsersController', useClass: Delay(() => UsersController) },
  { token: 'UsersRoute', useClass: Delay(() => UsersRoute) }
])
@Injectable()
export class UsersModule {
  constructor(@Inject('UsersRoute') public route: UsersRoute) {}
}
