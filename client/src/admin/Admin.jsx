import React from 'react';
import Sidebar from "./Sidebar"; 
import Topbar from "./Topbar"; 
import User from "../admin/pages/User"
import UserDetails from "../components/UserDetails";
import Dashboard from "../admin/pages/Dashboard";
import NewUser from "../admin/pages/NewUser";
import UserList from "../admin/pages/UserList";
import "../Sass/Styles/App.scss";
import "../styles/Admin.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Admin() {
  return (
    <Router>
      <Topbar/>
      <div className="containAll">
       <Sidebar />
        <Switch>
          <Route exact path="/admin">
            <Dashboard/>
            </Route>
          <Route exact path="/admin/topbar">
            <Topbar />
          </Route>
          <Route path="/admin/user/:id">
            <User />
          </Route>
          <Route exact path="/admin/newUser">
            <NewUser />
          </Route>
          <Route exact path="/admin/users">
            <UserList />
          </Route>
          {/* <Route path="/admin/user/:id">
            <UserDetails />
          </Route>  */}
        </Switch>
      </div>
    </Router>
  );
}