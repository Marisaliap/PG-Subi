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
import Registro from "./components/Registro";
import Footer from "./components/Footer";
import SubFooter from "./components/SubFooter";
import FormCar from "./components/FormCar";
import Auth from "./components/Auth";
import Map from "./components/Map";
import Users from "./components/Users";
import NavBar from "./components/NavBar";
import RouteDetails from "./components/RouteDetails";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CookiesPolicy from "./components/CookiesPolicy";
import AllInfoRoute from "./components/allInfoRoute";

export default function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <div>
            <NavBar />
            <Route path="/home" component={Home} />
            {isAuthenticated ? (
              <div>
                {
                  <Switch>
                    <Route exact path="/route" component={CreateRoute} />
                    <Route path="/route/finish" component={Map} />
                    <Route path="/register" component={Registro} />
                    <Route path="/user/:id" component={UserDetails} />
                    <Route path="/route-list" component={RouteDetails} />
                    <Route path="/route/:id" component= {AllInfoRoute}/>
                    <Route path="/car" component={FormCar} />
                    <Route path="/users" component={Users} />
                  </Switch>
                }
              </div>
            ) : (
              <h1 className="signInAlert">Login Please</h1>
            )}
            <Route path="/faq" component={Faq} />
            <Route
              path="/terms-and-conditions"
              component={TermsAndConditions}
            />
            <Route path="/recommendations" component={Recommendations} />
            <Route path="/aboutus" component={Aboutus} />
            <Footer />
            <SubFooter />
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
