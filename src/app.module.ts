import { Container, Injectable, Module, Router } from '@helpers/helper.di'
import { UsersModule } from '@modules/module.users'
import { PromotionsModule } from '@modules/module.promotions'

@Module([
  {
    token: 'UsersModule',
    useFactory: (): Router => {
      return Container.resolve(UsersModule).route.main()
    }
  },
  {
    token: 'PromotionsModule',
    useFactory: (): Router => {
      return Container.resolve(PromotionsModule).route.main()
    }
  }
])
@Injectable()
export class AppModule {}
