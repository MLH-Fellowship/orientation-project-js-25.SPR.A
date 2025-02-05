import "./AddEducation.css";

export default function AddEducation() {
  return(
    <div className="bodyContainer">
      <div className="mainContainer">
        {/* Image of a logo of a school */}
        <h2>Add Education</h2>
        {/*Image of an x to close and go back home */}
        <p>Add courses, certificate or bootcamp to Education section of resume.</p>
        <div className="formContainer">
          <input type="text" placeholder="Course"/>

          <input type="text" placeholder="School"/>
          <div className="dateHolder">
            <label>Start Date:</label>
            <input type="date"/>
          </div>
          <div className="dateHolder">
            <label>End Date:</label>
            <input type="date"/>
          </div>  
          <input type="text" placeholder="Grade"/>
          <label>Institution Logo:</label>
          <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
}

