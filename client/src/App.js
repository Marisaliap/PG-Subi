import React from "react"
import './Sass/Styles/App.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Home from "./components/Home"
import CreateRoute from "./components/CreateRoute"
import UserDetails from "./components/UserDetails"
import { useAuth0 } from "@auth0/auth0-react";
import Registro from './components/Registro';
import Footer from './components/Footer';
import Auth from './components/Auth';

function App() {
  const { isAuthenticated } = useAuth0()
  
  return (
    <BrowserRouter>
    <div className="App">
    <Route exact path= "/" component= { LandingPage }/>
    <Route  component= { Auth }/>
    <Route path= "/home" component= { Home }/>
    {isAuthenticated ? (<>
     { 
    <Switch>                                               
    <Route path="/route" component= { CreateRoute }/>
    <Route path='/register' component = { Registro }/>
    <Route path="/user/:id" component= { UserDetails }/>
    </Switch>
      }
    </>):( <h1 className='signInAlert'>Logueate Capo</h1>)
    }
    <Route  component= { Footer }/>
    </div>
    </BrowserRouter>
  );
}

export default App;
