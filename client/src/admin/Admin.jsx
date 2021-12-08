import React from 'react';
import { Sidebar } from "../admin/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Admin() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/admin/topbar">
            <Topbar />
          </Route>
          <Route path="/admin/testing">
            <Users />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}