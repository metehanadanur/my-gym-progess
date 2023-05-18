import React from "react";
import "./App.css";
import Header from "./ui-components/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <h1 className="text-3xl font-bold underline">My Gym Progress</h1>
      </header>
    </div>
  );
}

export default App;
