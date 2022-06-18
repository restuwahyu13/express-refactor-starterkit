import 'reflect-metadata'
import 'dotenv/config'
import 'express-async-errors'
import express, { Express, Request, Response } from 'express'
import http, { OutgoingMessage, Server } from 'http'
import { StatusCodes as status } from 'http-status-codes'
import { Connection, createConnection, useContainer } from 'typeorm'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'
import zlib from 'zlib'
import hpp from 'hpp'

import { Container, Injectable, Context, Router } from '@helpers/helper.di'
import { apiResponse } from '@helpers/helper.apiResponse'
import { AppModule } from '@/app.module'

@Injectable()
class App {
  private app: Express
  private server: Server
  private version: string
  private env: string
  private port: number

  constructor() {
    this.app = express()
    this.server = http.createServer(this.app)
    this.version = '/api/v1'
    this.env = process.env.NODE_ENV as any
    this.port = process.env.PORT as any
  }

  private connection(): Promise<Connection> {
    useContainer(Context)
    return createConnection()
  }

  private async config(): Promise<void> {
    this.app.disable('x-powered-by')
    Container.resolve<AppModule>(AppModule)
  }

  private async middleware(): Promise<void> {
    this.app.use(bodyParser.json({ limit: '5mb' }))
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(helmet({ contentSecurityPolicy: false }))
    this.app.use(hpp({ checkBody: true, checkQuery: true }))
    this.app.use(
      cors({
        origin: '*',
        methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
        credentials: true
      })
    )
    this.app.use(
      compression({
        strategy: zlib.constants.Z_RLE,
        level: zlib.constants.Z_BEST_COMPRESSION,
        memLevel: zlib.constants.Z_BEST_COMPRESSION
      })
    )
    if (!['production', 'test'].includes(this.env)) {
      this.app.use(morgan('dev'))
    }
  }

  private async route(): Promise<void> {
    this.app.use(`${this.version}/users`, Container.resolve<Router>('UsersModule'))
    this.app.use(`${this.version}/promotions`, Container.resolve<Router>('PromotionsModule'))
  }

  private async globalRoute(): Promise<void> {
    this.app.all(['/', '/api/v1'], (_req: Request, res: Response): OutgoingMessage => res.status(status.OK).json(apiResponse(status.OK, 'Server Ping !')))
  }

  private async run(): Promise<void> {
    const serverInfo: string = `Server is running on port: ${this.port}`
    this.server.listen(this.port, () => console.info(serverInfo))
  }

  public async main(): Promise<void> {
    await this.connection()
    await this.config()
    await this.middleware()
    await this.route()
    await this.globalRoute()
    await this.run()
  }
}

/**
 * @description boostraping app and run app with env development / production
 */

;(async function () {
  if (process.env.NODE_ENV != 'test') await Container.resolve<App>(App).main()
})()
