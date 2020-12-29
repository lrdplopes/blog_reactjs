import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>App Component</h1>
        <Home />
      </div>
    </div>
  );
};

export default App;
