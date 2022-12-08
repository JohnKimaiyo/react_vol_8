import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import Myname from "./components/Myname";
import Title from "./components/Title";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
      <Title name="FrontEnd Devloper" />
      <Title name="Mobile Devloper" />
      <Title name="Solidity Devloper" />
      <Title name="FullStack Devloper" />
      <Myname />
    </div>
  );
}

export default App;
