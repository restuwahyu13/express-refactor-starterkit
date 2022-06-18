import { Router, Request, Response } from 'express'

import { UsersController } from '@controllers/controller.users'
import { Injectable, Inject } from '@libs/lib.di'

@Injectable()
export class UsersRoute {
  private router: Router

  constructor(@Inject('UsersController') private controller: UsersController) {
    this.router = Router({ strict: true, caseSensitive: true })
  }

  routers(): Router {
    this.router.get('/', (req: Request, res: Response) => this.controller.ping(req, res))

    return this.router
  }
}
