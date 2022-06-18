import { Module, Injectable, Inject, Context, ObjectLiteral } from '@helpers/helper.di'
import { PromotionsService } from '@services/service.promotions'
import { PromotionsController } from '@controllers/controller.promotions'
import { PromotionsRoute } from '@routes/route.promotions'
import { PromotionsModel } from '@models/model.promotions'

@Module([
  { token: 'PromotionsService', useClass: PromotionsService },
  { token: 'PromotionsController', useClass: PromotionsController },
  { token: 'PromotionsRoute', useClass: PromotionsRoute },
  {
    token: 'PromotionsModel',
    useFactory: (): ObjectLiteral => {
      return Context.get(PromotionsModel).model
    }
  }
])
@Injectable()
export class PromotionsModule {
  constructor(@Inject('PromotionsRoute') public route: PromotionsRoute) {}
}
