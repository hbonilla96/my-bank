import React from "react";
import "./App.scss";
import CustomNavbar from "./components/navbar/navbar.component";
import LandingPage from "./components/landing-page/landing-page.component";

function App() {
  return (
    <div className="container">
      <CustomNavbar></CustomNavbar>
      <LandingPage></LandingPage>
    </div>
  );
}

export default App;
