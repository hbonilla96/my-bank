import React from "react";
import "./App.scss";
import CustomNavbar from "./components/navbar/navbar.component";
import LandingPage from "./components/landing-page/landing-page.component";
import RegisterUser from "./components/user/register-user.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
      </Switch>
    </Router>
  );
}

export default App;
