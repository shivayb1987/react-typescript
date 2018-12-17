import { takeEvery } from 'redux-saga/effects'

export interface Sagas {
  
}
export default function createSagaWatcher (sagas: any): any[]  {
  return Object.keys(sagas)
    .map(key =>
      (function * () {
        yield takeEvery(key, sagas[key])
      })()
    )
}