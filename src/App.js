import React from "react";
import logo from "./images/bg-header-desktop.svg";
import "./App.css";
import MakePage from "./MakePage";
import JobOffers from "./data.json";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="logo" />
      </header>
      <MakePage Offers={JobOffers} />
    </div>
  );
}

export default App;
