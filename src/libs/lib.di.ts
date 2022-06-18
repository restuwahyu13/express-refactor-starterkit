export {
  autoInjectable as Injectable,
  autoInjectable as Service,
  autoInjectable as Controller,
  autoInjectable as Route,
  inject as Inject,
  injectAll as InjectAll,
  injectWithTransform as InjectTransform,
  delay as Mutex,
  registry as Module,
  registry as Registry,
  container as Container
} from 'tsyringe'
import { Transform as Transforms } from 'tsyringe/dist/typings/types'
export { Service as Model, Container as TypeContainer } from 'typedi'
export { Repository } from 'typeorm'
export { InjectRepository } from 'typeorm-typedi-extensions'

export interface Transform<TIn, TOut> extends Transforms<TIn, TOut> {}
