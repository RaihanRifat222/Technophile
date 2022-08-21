import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import HomeScreen from './screens/HomeScreen'
ReactDOM.render(
  <Provider store = {store}>
    <App /> 
  </Provider>,
  document.getElementById("root")
);
