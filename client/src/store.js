import {createStore, combineReducers, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { getAllProductReducer } from './reducers/productReducer'
import { cartReducer } from './reducers/cartReducer'
import { registerUserReducer, loginUserReducer } from './reducers/userReducer'
const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const rootReducer = combineReducers ({
    getAllProductReducer: getAllProductReducer,
    cartReducer: cartReducer,
    registerUserReducer : registerUserReducer,
    loginUserReducer: loginUserReducer,
})
const initialState ={
    cartReducer:{
        cartItems: cartItems,
    },
    loginUserReducer: {
        currentUser: currentUser,
    }
}

const cartItem = localStorage.getItem ('cartItems') ? JSON.parse (localStorage.getItem('cartItems')) : []

const middleware = [thunk]

const store = createStore  (rootReducer, initialState, applyMiddleware(composeWithDevTools(...middleware)))

export default store 