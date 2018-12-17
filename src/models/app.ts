import { createAction, createReducer, EmptyActionCreator } from 'redux-act'
import { delay } from 'redux-saga'
import { StoreState } from '../types';
import createSagaWatcher from '../utils/createSagaWatcher';
import { Increment } from '../actions';
export const increment = createAction('INCREMENT')
export const decrement = createAction('DECREMENT')
export type Increment = {
  type: string
}
export type Decrement = {
  type: string
}
export type APP_ACTION = Increment | Decrement

const sagas = {
  [increment.getType()]: function * () {
    console.log('increment saga')
    yield delay(1)
  },
  [decrement.getType()]: function * () {
    console.log('decrement saga')
    yield delay(1)
  }
}

export const appSaga = createSagaWatcher(sagas)

const defaultState = {
  count: 1
}

const appReducer = createReducer({}, defaultState)
appReducer.on(increment, (state: StoreState) => ({
  ...state,
  count: state.count + 1
}))
appReducer.on(decrement, (state: StoreState) => ({
  ...state,
  count: Math.max(1, state.count - 1)
}))

export default appReducer
