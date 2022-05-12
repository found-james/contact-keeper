import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Register from "./components/auth/Register";
import ContactState from "./components/context/contact/ContactState";
import AuthState from "./components/context/auth/AuthState";

import "./App.css";

function App() {
  return (
    <AuthState>
    <ContactState>
    <Router>
      <Fragment>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path ="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      </Fragment>
    </Router>
    </ContactState>
    </AuthState>
  );
}

export default App;
