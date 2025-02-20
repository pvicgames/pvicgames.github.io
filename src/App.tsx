import "./styles.css";
import "animate.css";

import { HashRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
