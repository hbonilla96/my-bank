import React, { useState, useEffect } from "react";
import "./App.scss";
import CustomNavbar from "./components/navbar/navbar.component";
import LandingPage from "./components/landing-page/landing-page.component";
import RegisterUser from "./components/user/register-user.component";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Transaction from "./components/transactions/transaction.component";
import UserDashboard from "./components/user-dashboard/user-dashboard.component";
import { loginService } from "./services/loginService";
import ChangePassword from "./components/change-password/change-password.component";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const subs = loginService.userData.subscribe(data =>
      setIsLogged(data.isUserLogged)
    );

    return () => subs.unsubscribe();
  }, []);
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
        {isLogged && (
          <>
            <Route path="/transfers">
              <Transaction></Transaction>
            </Route>
            <Route path="/dashboard">
              <UserDashboard></UserDashboard>
            </Route>
            <Route path="/configuration">
              <ChangePassword></ChangePassword>
            </Route>
          </>
        )}
        <Redirect to="/" path="**" />
      </Switch>
    </Router>
  );
}

export default App;
