import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import AddEducation from "./AddEducation";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addEducation" element={<AddEducation />} />
      </Routes>
    </Router>
  );
}

