import React from "react";
import { useSelector } from "react-redux";
import "./Sass/Styles/App.scss";
import "../src/styles/Admin.css";
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
import Post from "./components/Post";
import Admin from "./admin/Admin";
import RouteDetails from "./components/RouteDetails";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CookiesPolicy from "./components/CookiesPolicy";
import AllInfoRoute from "./components/allInfoRoute";
import RoutesFromSearch from "./components/RoutesFromSearch";
import SuggestionBox from "./components/SuggestionBox";
import UserProfile from "./components/UserProfile";
import Chat from "./components/Chat";
import { Redirect } from "react-router";
import { FormattedMessage } from "react-intl";

export default function App() {
  const { isAuthenticated } = useAuth0();
  const [showButton, setShowButton] = useState(false);
  const { userpro } = useSelector((state) => state);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []); //eslint-disable-line
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
          {/* eslint-disable-next-line */}
          <Route exact path="/" component={LandingPage} />
          <>
            {/* eslint-disable-next-line */}
            <NavBar />
            {/* eslint-disable-next-line */}
            <Route path="/home" component={Home} />
            {isAuthenticated &&
            (userpro.isBanned === false || userpro.length === 0) ? (
              <>
                {isAuthenticated ? (
                  <>
                    <Switch>
                      {/* eslint-disable-next-line */}
                      <Route exact path="/route" component={CreateRoute} />
                      {/* eslint-disable-next-line */}
                      <Route path="/route/finish" component={Map} />
                      {/* eslint-disable-next-line */}
                      <Route path="/register" component={Register} />
                      {/* eslint-disable-next-line */}
                      <Route exact path="/profile" component={UserProfile} />
                      {/* eslint-disable-next-line */}
                      <Route path="/user/:id" component={UserDetails} />
                      {/* eslint-disable-next-line */}
                      <Route path="/route-list/:id" component={RouteDetails} />
                      {/* eslint-disable-next-line */}
                      <Route path="/route-list/" component={RouteDetails} />
                      {/* eslint-disable-next-line */}
                      <Route path="/maps/route" component={RouteDetails} />
                      {/* eslint-disable-next-line */}
                      <Route
                        path="/routes-found"
                        component={RoutesFromSearch}
                      />
                      {/* eslint-disable-next-line */}
                      <Route path="/route/:id" component={AllInfoRoute} />
                      {/* eslint-disable-next-line */}
                      <Route path="/car" component={FormCar} />
                      {/* eslint-disable-next-line */}
                      <Route path="/users" component={Users} />
                      {/* eslint-disable-next-line */}
                      <Route path="/post/:id" component={Post} />
                      {/* eslint-disable-next-line */}
                      <Route path="/404" component={Error404} />
                      {/* eslint-disable-next-line */}
                      <Route path="/chat/:email" component={Chat} />
                      {/* eslint-disable-next-line */}
                      {userpro && userpro.isAdmin === true ? (
                        <Route exact path="/admin" component={Admin} />
                      ) : (
                        <Redirect to="/home" />
                      )}
                    </Switch>
                  </>
                ) : (
                  ""
                )}
                {/* eslint-disable-next-line */}
                <Route path="/faq" component={Faq} />
                {/* eslint-disable-next-line */}
                <Route
                  path="/terms-and-conditions"
                  component={TermsAndConditions}
                />
                {/* eslint-disable-next-line */}
                <Route path="/recommendations" component={Recommendations} />
                {/* eslint-disable-next-line */}
                <Route path="/aboutus" component={Aboutus} />
                {/* eslint-disable-next-line */}
                <Route path="/privacy-policy" component={PrivacyPolicy} />
                {/* eslint-disable-next-line */}
                <Route path="/cookies-policy" component={CookiesPolicy} />
                {/* eslint-disable-next-line */}
                <Route path="/suggestion-box" component={SuggestionBox} />
                {showButton && (
                  <button onClick={scrollToTop} className="back-to-top">
                    &#8679;
                  </button>
                )}
              </>
            ) : (
              <>
                <FormattedMessage
                  id="app.banned"
                  defaultMessage="You dont have access here"
                />
              </>
            )}
            <Route>
              <Footer />
            </Route>
          </>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
