import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useStatus } from "./registrationStatus";
import Children from "./Children";

function App() {
  const status = useStatus();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>learn react</p>
        </a>
        <Children />
      </header>
    </div>
  );
}

export default App;
