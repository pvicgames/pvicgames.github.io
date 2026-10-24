import "./styles.css";
import "animate.css";

import i18n from "./i18n";

import { HashRouter as Router, Routes, Route } from "react-router";
import { lazy, Suspense, useEffect } from "react";

import Home from "./pages/Home";
import { ParallaxProvider } from "react-scroll-parallax";
import ScrollToTop from "./components/global/ScrollToTop";

// pages other than home are only downloaded when visited (about pulls in three.js)
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const EdMescDX = lazy(() => import("./pages/EdMescDX"));
const NewArtius = lazy(() => import("./pages/NewArtius"));
const OldArtius = lazy(() => import("./pages/OldArtius"));
const ArtiusCredits = lazy(() => import("./pages/ArtiusCredits"));
const PlayArtius = lazy(() => import("./pages/PlayArtius"));

const savedLanguage = localStorage.getItem("language") || navigator.language

function App() {
  useEffect(() => {
    i18n.changeLanguage(savedLanguage);
  }, []);

  return (
    <ParallaxProvider>
      <Router>
        <ScrollToTop />
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/oldartius" element={<OldArtius />} />
            <Route path="/artius" element={<NewArtius />} />
            <Route path="/playartius" element={<PlayArtius />} />
            <Route path="/artiuscredits" element={<ArtiusCredits />} />
            <Route path="/edmescdx" element={<EdMescDX />} />
          </Routes>
        </Suspense>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
