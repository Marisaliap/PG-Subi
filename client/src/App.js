import React from "react";
import "./Sass/Styles/App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import Faq from "./components/Faq";
import TermsAndConditions from "./components/TermsAndConditions";
import Aboutus from "./components/Aboutus";
import Recommendations from "./components/Recommendations";
import CreateRoute from "./components/CreateRoute";
import UserDetails from "./components/UserDetails";
import allInfoRoute from "./components/allInfoRoute";
import { useAuth0 } from "@auth0/auth0-react";
import Registro from './components/Registro';
import Footer from './components/Footer';
import FormCar from './components/FormCar';
import Auth from './components/Auth';
import Map from "./components/Map"
import Users from "./components/Users"
import NavBar from "./components/NavBar";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <BrowserRouter>
    <div className="App">
    <NavBar />
    <Route exact path= "/" component= { LandingPage }/>
    <Route path= "/home" component= { Home }/>
    {isAuthenticated ? (<>
     { 
    <Switch>                                               
    <Route exact path="/route" component= { CreateRoute }/>
    <Route path='/route/finish' component={ Map } />
    <Route path='/register' component = { Registro }/>
    <Route path="/user/:id" component= { UserDetails }/>
    <Route path="/route-list" component= { allInfoRoute }/>
    <Route path="/car" component= { FormCar }/>
    <Route path="/users" component= { Users } />
    </Switch>
      }
    </>):( <h1 className='signInAlert'>Logueate Capo</h1>)
    }
    <Route path="/faq" component= { Faq }/>
    <Route path="/terms-and-conditions" component= { TermsAndConditions }/>
    <Route path="/recommendations" component= { Recommendations }/>
    <Route path="/aboutus" component= { Aboutus }/>
    <Route  component= { Footer }/>
    </div>
    </BrowserRouter>
  );
}

export default App;
