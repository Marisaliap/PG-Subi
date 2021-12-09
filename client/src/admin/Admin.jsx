import React from 'react'
 import Sidebar from './Components/Sidebar';
 import TopBar from '../Components/Topbar';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Style/styles.css";

export default function Admin() {
  return (
      <Router>
      <TopBar/>
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/admin">
            <Dashboard />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
          {/* <Route path="/user/:userId">
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
          </Route> */}
        </Switch>
      </div>
    </Router>

  );
}
