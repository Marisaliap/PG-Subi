import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Home from "./components/Home"
import CreateRoute from "./components/CreateRoute"
import UserDetails from "./components/UserDetails"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>                                               
    <Route exact path= "/" component= { LandingPage }/>
    <Route path= "/home" component= { Home }/>
    <Route path="/route" component= { CreateRoute }/>
    <Route path="/user/:id" component= { UserDetails }/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
