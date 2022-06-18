export {
  autoInjectable as Injectable,
  autoInjectable as Service,
  autoInjectable as Controller,
  autoInjectable as Route,
  inject as Inject,
  injectAll as InjectAll,
  injectWithTransform as InjectTransform,
  delay as Delay,
  registry as Module,
  container as Container
} from 'tsyringe'
import { Transform as Transforms } from 'tsyringe/dist/typings/types'

export interface Transform<TIn, TOut> extends Transforms<TIn, TOut> {}
