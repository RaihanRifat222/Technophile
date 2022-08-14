import {createStore, combineReducers, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { getAllProductReducer } from './reducers/productReducer'

const rootReducer = combineReducers ({
    getAllProductReducer: getAllProductReducer
})
const initialState ={}
const middleware = [thunk]

const store = createStore  (rootReducer, initialState, applyMiddleware(composeWithDevTools(...middleware)))

export default store