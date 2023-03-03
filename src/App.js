import React from "react";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
    </div>
  );
}

export default App;
