import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import userSaga from './saga'
import userReducer from './reducers'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(userReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(userSaga)

export default store