import React from "react"
import './Sass/Styles/App.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Home from "./components/Home"
import Faq from "./components/Faq"
import TermsAndConditions from "./components/TermsAndConditions"
import Aboutus from "./components/Aboutus"
import Recommendations from "./components/Recommendations"
import CreateRoute from "./components/CreateRoute"
import UserDetails from "./components/UserDetails"
import allInfoRoute from "./components/allInfoRoute"
import { useAuth0 } from "@auth0/auth0-react";
import Registro from './components/Registro';
import Footer from './components/Footer';
import Auth from './components/Auth';
import Users from "./components/Users"

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
    <Route path="/faq" component= { Faq }/>
    <Route path="/terms-and-conditions" component= { TermsAndConditions }/>
    <Route path="/recommendations" component= { Recommendations }/>
    <Route path="/aboutus" component= { Aboutus }/>
    <Route path="/route-list" component= { allInfoRoute }/>
    <Route path="/users" component= { Users } />
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
