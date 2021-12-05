import React from "react";
import "./Sass/Styles/App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import Faq from "./components/Faq";
import TermsAndConditions from "./components/TermsAndConditions";
import Aboutus from "./components/Aboutus";
import Recommendations from "./components/Recommendations";
import CreateRoute from "./components/CreateRoute";
import UserDetails from "./components/UserDetails";
import { useAuth0 } from "@auth0/auth0-react";
import Register from "./components/Register";
import Footer from "./components/Footer";
import FormCar from "./components/FormCar";
import Map from "./components/Map";
import Users from "./components/Users";
import Error404 from "./components/Error404";
import NavBar from "./components/NavBar";
import RouteDetails from "./components/RouteDetails";
import PoliticaPrivacidad from "./components/PoliticaPrivacidad";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CookiesPolicy from "./components/CookiesPolicy";
import AllInfoRoute from "./components/allInfoRoute";
import RoutesFromSearch from "./components/RoutesFromSearch";
import SuggestionBox from "./components/SuggestionBox";
import UserProfile from "./components/UserProfile";
import Chat from "./components/Chat";



export default function App() {
  const { isAuthenticated } = useAuth0();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
                    <Route path="/chat" component={Chat} />
                    <Route exact path="/route" component={CreateRoute} />
                    <Route path="/route/finish" component={Map} />
                    <Route path="/register" component={Register} />
                    <Route exact path="/profile" component={UserProfile} />
                    <Route path="/user/:id" component={UserDetails} />
                    <Route path="/route-list" component={RouteDetails} />
                    <Route path="/maps/route" component={RouteDetails} />
                    <Route path="/routes-found" component={RoutesFromSearch} />
                    <Route path="/route/:id" component={AllInfoRoute} />
                    <Route path="/car" component={FormCar} />
                    <Route path="/users" component={Users} />
                    <Route path="/404" component={Error404} />
                  </Switch>
                }
              </div>
            ) : (
              ""
            )}
            <Route path="/faq" component={Faq} />
            <Route
              path="/terms-and-conditions"
              component={TermsAndConditions}
            />
            <Route path="/recommendations" component={Recommendations} />
            <Route path="/aboutus" component={Aboutus} />
            <Route path="/politica-privacidad" component={PoliticaPrivacidad} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/cookies-policy" component={CookiesPolicy} />
            <Route path="/suggestion-box" component={SuggestionBox} />
            {showButton && (
              <button onClick={scrollToTop} className="back-to-top">
                &#8679;
              </button>
            )}
            <Footer />
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
