import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Home from "./components/Home"
import CreateRoute from "./components/CreateRoute"
import UserDetails from "./components/UserDetails"
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./components/Login"
import { LogoutButton } from "./components/Logout"
import { Profile } from "./components/Profile"

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <BrowserRouter>
    <div className="App">
    {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
     { <Switch>                                               
    <Route exact path= "/" component= { LandingPage }/>
    <Route path= "/home" component= { Home }/>
    <Route path="/route" component= { CreateRoute }/>
    <Route path="/user/:id" component= { UserDetails }/>
      </Switch>}
    </div>
    </BrowserRouter>
  );
}

export default App;
