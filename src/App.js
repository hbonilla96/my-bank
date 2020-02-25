import React from "react";
import "./App.scss";
import CustomNavbar from "./components/navbar/navbar.component";
import LandingPage from "./components/landing-page/landing-page.component";
import RegisterUser from "./components/user/register-user.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Transaction from "./components/transactions/transaction.component";

function App() {
  return (
    <Router>
      <CustomNavbar></CustomNavbar>
      <Switch>
        <Route path="/" exact>
          <div className="container">
            <LandingPage></LandingPage>
          </div>
        </Route>
        <Route path="/register">
          <RegisterUser></RegisterUser>
        </Route>
        <Route path="/transfers">
          <Transaction></Transaction>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
