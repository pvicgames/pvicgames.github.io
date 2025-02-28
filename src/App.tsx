import "./styles.css";
import "animate.css";

import i18n from "./i18n";
import { HashRouter as Router, Routes, Route } from "react-router";
import { useEffect } from "react";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import EdMescDX from "./pages/EdMescDX";

function App() {
  useEffect(() => {
    i18n.changeLanguage(navigator.language)
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/edmescdx" element={<EdMescDX />} />
      </Routes>
    </Router>
  );
}

export default App;
