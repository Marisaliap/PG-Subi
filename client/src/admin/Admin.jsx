import React from 'react';
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import User from "./pages/Users";
import Update from "./pages/Update"
import Dashboard from "../admin/pages/Dashboard";
import NewUser from "../admin/pages/NewUser";
import UserList from "../admin/pages/UserList";
import Feedback from "../admin/pages/Feedback";
import Message from "../admin/pages/Message";
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
          <Route exact path="/admin">
            <Dashboard />
          </Route>
          <Route path="/admin/users/:id">
            <User />
          </Route>
          <Route path="/admin/Update">
            <Update />
          </Route>
          <Route exact path="/admin/newUser">
            <NewUser />
          </Route>
          <Route exact path="/admin/users">
            <UserList />
          </Route>
          <Route exact path="/admin/feed">
            <Feedback />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}
