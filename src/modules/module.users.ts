import { Module, Injectable, Inject, Context, ObjectLiteral } from '@helpers/helper.di'
import { UsersService } from '@services/service.users'
import { UsersController } from '@controllers/controller.users'
import { UsersRoute } from '@routes/route.users'
import { UsersModel } from '@models/model.users'

@Module([
  { token: 'UsersService', useClass: UsersService },
  { token: 'UsersController', useClass: UsersController },
  { token: 'UsersRoute', useClass: UsersRoute },
  {
    token: 'UsersModel',
    useFactory: (): ObjectLiteral => {
      return Context.get(UsersModel).model
    }
  }
])
@Injectable()
export class UsersModule {
  constructor(@Inject('UsersRoute') public route: UsersRoute) {}
}
