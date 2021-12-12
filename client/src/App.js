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
/* import Dashboard from "./admin/pages/Dashboard"; */
import RouteDetails from "./components/RouteDetails";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CookiesPolicy from "./components/CookiesPolicy";
import AllInfoRoute from "./components/allInfoRoute";
import RoutesFromSearch from "./components/RoutesFromSearch";
import SuggestionBox from "./components/SuggestionBox";
import UserProfile from "./components/UserProfile";
/* import Topbar from "./admin/Topbar"; */
/* import Sidebar from "./admin/Sidebar"; */
import { Redirect } from "react-router";


export default function App() {
  const { isAuthenticated } = useAuth0();
  const [showButton, setShowButton] = useState(false);
  const { userpro } = useSelector(state => state)
  const admin = userpro.isAdmin

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
              <>
                {
                  <Switch>
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
                    <Route path="/post/:id" component={Post} />
                    <Route path="/404" component={Error404} />
                    <div>
                      <Route
                        exact
                        path="/admin"
                        render={() =>
                          userpro && admin === true ? (
                            <Admin />
                          ) : (
                            <Redirect to="/home" />
                          )
                        // exact
                        // path="/admin"
                        // render={() =>
                        //   userpro && userpro.isAdmin === true ? (
                        //     <Admin />
                        //   ) : (
                        //     <Redirect to="/home" />
                        //   )
                        }
                      />
                    </div>
                  </Switch>
                }
              </>
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
