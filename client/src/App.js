import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

import "./App.css";

function App() {
  return (
    <Router>
      <Fragment>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path ="/about" element={<About />} />
        </Routes>
      </div>
      </Fragment>
    </Router>
  );
}

export default App;