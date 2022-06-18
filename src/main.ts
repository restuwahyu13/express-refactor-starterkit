import 'reflect-metadata'
import 'dotenv/config'
import express, { Express } from 'express'
import http, { Server } from 'http'
import { Connection, createConnection, useContainer } from 'typeorm'
import { Container as TypeContainer } from 'typeorm-typedi-extensions'

import { Container, Injectable } from '@libs/lib.di'
import { AppModule } from '@/app.module'

@Injectable()
class App {
  private app: Express
  private server: Server
  private port: number

  constructor() {
    this.app = express()
    this.server = http.createServer(this.app)
    this.port = process.env.PORT as any
  }

  private connection(): Promise<Connection> {
    useContainer(TypeContainer)
    return createConnection()
  }

  private async config(): Promise<void> {
    this.app.disable('x-powered-by')
    Container.resolve(AppModule)
  }

  private async routes(): Promise<void> {
    this.app.use(Container.resolve('UsersModule'))
  }

  private async run(): Promise<void> {
    const serverInfo: string = `Server is running on port: ${this.port}`
    this.server.listen(this.port, () => console.info(serverInfo))
  }

  public async main(): Promise<void> {
    await this.connection()
    await this.config()
    await this.routes()
    await this.run()
  }
}

/**
 * @description boostraping app and run app with env development / production
 */

;(async function () {
  if (process.env.NODE_ENV != 'test') await Container.resolve<App>(App).main()
})()
