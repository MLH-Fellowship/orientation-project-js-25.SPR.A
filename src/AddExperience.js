import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddExperience() {
  const [experience, setExperience] = useState({
    title: "",
    company: "",
    start_date: "",
    end_date: "",
    description: "",
    logo: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setExperience({
      ...experience,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/resume/experience", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(experience),
      });
      const data = await response.json();
      alert(`Experience added with ID: ${data.id}`);
      navigate("/");
    } catch (error) {
      console.error("Error adding experience:", error);
    }
  };

  return (
    <div>
      <h2>Add Experience</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} />
        <input type="text" name="company" placeholder="Company" onChange={handleChange} />
        <input type="text" name="start_date" placeholder="Start Date" onChange={handleChange} />
        <input type="text" name="end_date" placeholder="End Date" onChange={handleChange} />
        <textarea name="description" placeholder="Description" onChange={handleChange} />
        <input type="text" name="logo" placeholder="Logo URL" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddExperience;
