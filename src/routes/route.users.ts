import { UsersController } from '@controllers/controller.users'
import { Inject, Route, Router } from '@helpers/helper.di'

@Route()
export class UsersRoute {
  private router: Router

  constructor(@Inject('UsersController') private controller: UsersController) {
    this.router = Router({ strict: true, caseSensitive: true })
  }

  main(): Router {
    this.router.get('/', this.controller.getAllUsers())

    return this.router
  }
}
