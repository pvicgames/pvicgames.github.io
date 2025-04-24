import "./styles.css";
import "animate.css";

import i18n from "./i18n";

import { HashRouter as Router, Routes, Route } from "react-router";
import { useEffect } from "react";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import EdMescDX from "./pages/EdMescDX";
import NewArtius from "./pages/NewArtius";
import OldArtius from "./pages/OldArtius";
import { ParallaxProvider } from "react-scroll-parallax";
import ScrollToTop from "./components/global/ScrollToTop";

const savedLanguage = localStorage.getItem("language") || navigator.language

function App() {
  useEffect(() => {
    i18n.changeLanguage(savedLanguage);
  }, []);

  return (
    <ParallaxProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/oldartius" element={<OldArtius />} />
          <Route path="/artius" element={<NewArtius />} />
          <Route path="/edmescdx" element={<EdMescDX />} />
        </Routes>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
