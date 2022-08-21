import "./App.css";
import { Container } from "react-bootstrap";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import TopBar from "./components/topbar";
import About from './components/about'
import contact from "./components/contact";
import policy from "./components/policy"
import NavBar from "./components/NavBar"
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/cartScreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
import OrderScreen from "./screens/OrderScreen";
function App() {
  return (
    <BrowserRouter>
     <TopBar/>
     <NavBar/>
     <Switch>
     <Route path='/orders' component={OrderScreen} exact></Route>
     <Route path='/login' component={Login} exact></Route>
     <Route path='/register' component={Register} exact></Route>
     <Route path='/cart' component={CartScreen} exact></Route>
      <Route path='/about' component={About} exact></Route>
      <Route path='/contact' component={contact} exact></Route>
      <Route path='/policy' component={policy} exact></Route>
      <Route path='/NavBar' component={NavBar} exact></Route>
      <Route path='/' component={HomeScreen} exact></Route>
     </Switch>
    </BrowserRouter>
  );
}

export default App;
