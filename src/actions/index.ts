import { INCREMENT, DECREMENT } from '../constants'
import { ExecSyncOptionsWithStringEncoding } from 'child_process';

export type Increment = {
  type: string
}

export type Decrement = {
  type: ExecSyncOptionsWithStringEncoding
}

export function increment () {
  return {
    type: INCREMENT
  }
}

export function decrement () {
  return {
    type: DECREMENT
  }
}

export type APP_ACTION = Increment | Decrement