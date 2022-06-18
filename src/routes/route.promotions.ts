import { PromotionsController } from '@controllers/controller.promotions'
import { Inject, Route, Router } from '@helpers/helper.di'

@Route()
export class PromotionsRoute {
  private router: Router

  constructor(@Inject('PromotionsController') private controller: PromotionsController) {
    this.router = Router({ strict: true, caseSensitive: true })
  }

  main(): Router {
    this.router.get('/', this.controller.getAllPromotions())

    return this.router
  }
}
