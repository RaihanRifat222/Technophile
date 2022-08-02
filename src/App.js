import "./App.css";
import { Container } from "react-bootstrap";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import TopBar from "./components/topbar";
import About from './components/about'
import contact from "./components/contact";
import policy from "./components/policy"
import NavBar from "./components/NavBar"
function App() {
  return (
    <BrowserRouter>
     <TopBar/>
     <NavBar/>
     <Switch>
      <Route path='/about' component={About} exact></Route>
      <Route path='/contact' component={contact} exact></Route>
      <Route path='/policy' component={policy} exact></Route>
      <Route path='/NavBar' component={NavBar} exact></Route>
     </Switch>
    </BrowserRouter>
  );
}

export default App;
