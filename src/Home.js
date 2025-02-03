import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {

  let navigate = useNavigate();
  return (
    <div className="App">
      <h1>Resume Builder</h1>
      <div className="contentHolder">
        <div className="resumeSection">
          <h2>Experience</h2>
          <p>Experience Placeholder</p>
          <button>Add Experience</button>
          <br></br>
        </div>
        <div className="resumeSection">
          <h2>Education</h2>
          <p>Education Placeholder</p>
          <button onClick={()=>navigate('/addEducation')}>Add Education</button>
          <br></br>
        </div>
        <div className="resumeSection">
          <h2>Skills</h2>
          <p>Skill Placeholder</p>
          <button onClick={()=>navigate('/addSkill')}>Add Skill</button>
          <br></br>
        </div>
      </div>
      <button>Export</button>
    </div>
  );
}
