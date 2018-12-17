import * as actions from '../actions'
import { INCREMENT, DECREMENT } from '../constants'
import { StoreState } from '../types'

export default function counter (state: StoreState, action: actions.APP_ACTION) {
  switch (action.type) {
    case INCREMENT : 
      return {
        ...state,
        count: state.count + 1
      }
    case DECREMENT : 
      return {
        ...state,
        count: Math.max(1, state.count - 1)
      }
    default : 
      return state
  }
}