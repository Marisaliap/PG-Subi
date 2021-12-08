import React from 'react';
import Sidebar from "./Sidebar"; 
import Topbar from "./Topbar"; 
import Users from "./Users"; 
import UserDetails from "../components/UserDetails";
import Dashboard from "../admin/pages/Dashboard";
import "../Sass/Styles/App.scss";
import "../styles/Admin.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Admin() {
  return (
    <Router>
      <Topbar />
        <div className="containAll">
       <Sidebar />
        <Switch>
          <Route path="/admin/topbar">
            <Topbar />
          </Route>
          <Route exact path="/admin/users">
           <Users />
          </Route>
          <Route path="/user/:id">
            <UserDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}