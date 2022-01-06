import { createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import reducer from './reducer.js'
import {persistStore} from 'redux-persist'

export const store= createStore(reducer,applyMiddleware(thunk))

export const persistor= persistStore(store)