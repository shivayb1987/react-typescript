import { appSaga } from './models/app'
import {all, call} from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

export default function * allSagas(): SagaIterator {
  yield all([
    ...appSaga
  ])
}