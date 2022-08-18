import {createStore, combineReducers, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { getAllProductReducer } from './reducers/productReducer'
import { cartReducer } from './reducers/cartReducer'

const cartItems = localStorage.getItem("cartItems")
? JSON.parse (localStorage.getItem("cartItems"))
: [];

const rootReducer = combineReducers ({
    getAllProductReducer: getAllProductReducer,
    cartReducer: cartReducer,
})
const initialState ={
    cartReducer:{
        cartItems: cartItems,
    }
}

const cartItem = localStorage.getItem ('cartItems') ? JSON.parse (localStorage.getItem('cartItems')) : []

const middleware = [thunk]

const store = createStore  (rootReducer, initialState, applyMiddleware(composeWithDevTools(...middleware)))

export default store 