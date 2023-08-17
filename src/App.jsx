import React, { useEffect, useState } from "react";
import Intro from "./components/Intro";
import Sidenav from "./components/Sidenav";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gradient-to-r from-slate-600 to-slate-700">
      <Intro />

      <Sidenav />
      <Portfolio />
      <About />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
