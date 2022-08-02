import "./App.css";
import { Container } from "react-bootstrap";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import TopBar from "./components/topbar";
import About from './components/about'
import contact from "./components/contact";
import policy from "./components/policy"
function App() {
  return (
    <BrowserRouter>
     <TopBar/>
     <Switch>
      <Route path='/about' component={About} exact></Route>
      <Route path='/contact' component={contact} exact></Route>
      <Route path='/policy' component={policy} exact></Route>
     </Switch>
    </BrowserRouter>
  );
}

export default App;
