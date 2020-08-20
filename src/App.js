import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./style/main.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
