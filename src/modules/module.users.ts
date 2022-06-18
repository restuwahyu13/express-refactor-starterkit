import { UsersService } from '@services/service.users'
import { UsersController } from '@controllers/controller.users'
import { UsersRoute } from '@routes/route.users'
import { Module, Mutex, Injectable, Inject } from '@libs/lib.di'

@Module([
  { token: 'UsersService', useClass: Mutex(() => UsersService) },
  { token: 'UsersController', useClass: Mutex(() => UsersController) },
  { token: 'UsersRoute', useClass: Mutex(() => UsersRoute) }
])
@Injectable()
export class UsersModule {
  constructor(@Inject('UsersRoute') public route: UsersRoute) {}
}
