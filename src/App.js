import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      {/* <div> */}
      <Nav />
      <Routes>
      <Route exact path="/" element={<About />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      {/* </div> */}
    </Router>
  );
}

export default App;
