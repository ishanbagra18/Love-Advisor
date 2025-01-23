import React from "react";
import { Routes, Route } from "react-router-dom";
import Heading from "./Components/Heading";
import Marque from "./Components/Marque";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Features from "./Pages/Features";

function App() {
  return (
    <>
      <Heading />
      <Marque />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </>
  );
}

export default App;
