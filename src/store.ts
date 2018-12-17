import { createStore, applyMiddleware, compose } from 'redux'
import { StoreState } from './types';
import createSagaMiddleware from 'redux-saga'
import appReducer, {APP_ACTION} from './models/app'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore<StoreState, APP_ACTION, {}, {}>(
  appReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store