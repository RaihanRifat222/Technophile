import "./App.css";
import { Container } from "react-bootstrap";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import TopBar from "./components/topbar";
import About from './components/about'
function App() {
  return (
    <BrowserRouter>
     <TopBar/>
     <Switch>
      <Route path='/about' component={About} exact></Route>
     </Switch>
    </BrowserRouter>
  );
}

export default App;
