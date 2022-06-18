import { Model, InjectRepository, Repository } from '@helpers/helper.di'
import { Promotions } from '@entities/entitie.promotions'

@Model()
export class PromotionsModel {
  constructor(@InjectRepository(Promotions) public model: Repository<Promotions>) {}
}
