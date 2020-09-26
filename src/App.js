import React from "react";
import "./App.css";
import MakePage from "./MakePage";
import JobOffers from "./data.json";
import logo from "./bg-header-desktop.svg"

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
