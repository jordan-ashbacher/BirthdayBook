import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger'

import rootReducer from './src/reducers/_root.reducer'
import rootSaga from './src/sagas/_root.saga'

import App from './App'

const sagaMiddleware = createSagaMiddleware()

const middlewareList = process.env.NODE_ENV === 'development' ?
    [sagaMiddleware, logger] :
    [sagaMiddleware]

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewareList)
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react-root')
)