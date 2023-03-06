import React from "react";
import "./App.css";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Menu />
      <Gallery />
    </div>
  );
}

export default App;
