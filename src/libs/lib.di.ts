export {
  injectable as Injectable,
  inject as Inject,
  injectWithTransform as InjectTransform,
  delay as Delay,
  registry as Registry,
  container as Container
} from 'tsyringe'
import { Transform as Transforms } from 'tsyringe/dist/typings/types'

export interface Transform<TIn, TOut> extends Transforms<TIn, TOut> {}
