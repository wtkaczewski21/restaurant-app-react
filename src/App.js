import React from "react";
import "./App.css";

import {
  About,
  Contact,
  Footer,
  Gallery,
  Header,
  Menu,
  Navbar,
  Newsletter,
} from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Menu />
      <Gallery />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
