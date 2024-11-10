// src/App.js
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AddExperience from "./AddExperience";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Resume Builder</h1>
      <div className="resumeSection">
        <h2>Experience</h2>
        <p>Experience Placeholder</p>
        <Link to="/add-experience">
          <button>Add Experience</button>
        </Link>
      </div>
      <div className="resumeSection">
        <h2>Education</h2>
        <p>Education Placeholder</p>
        <button>Add Education</button>
        <br></br>
      </div>
      <div className="resumeSection">
        <h2>Skills</h2>
        <p>Skill Placeholder</p>
        <button>Add Skill</button>
        <br></br>
      </div>
      <br></br>
      <button>Export</button>
      
      <Routes>
        <Route path="/" element={<div>Home Page Content</div>} />
        <Route path="/add-experience" element={<AddExperience />} />
      </Routes>
    </div>
  );
}

export default App;
