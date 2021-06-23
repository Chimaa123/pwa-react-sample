import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useStatus } from "./registrationStatus";

function App() {
  const status = useStatus();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {status}
        </a>
      </header>
    </div>
  );
}

export default App;
