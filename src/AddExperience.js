import styles from "./AddExperience.module.css";

export default function AddEducation() {
  return(
    <div className={styles.bodyContainer}>
      <div className={styles.mainContainer}>
        {/* Image of a logo of a school */}
        <h2>Add Experience</h2>
        {/*Image of an x to close and go back home */}
        <p>Add relevant work and job experience to your resume.</p>
        <div className={styles.formContainer}>
          <div className={styles.leftSide}>
            <input type="text" placeholder="Title"/>

            <input type="text" placeholder="Company"/>
            <div className={styles.dateHolder}>
              <label>Start Date:</label>
              <input type="date"/>
            </div>
            <div className={styles.dateHolder}>
              <label>End Date:</label>
              <input type="date"/>
            </div>  
          </div>
          <div className={styles.rightSide}>

            <textarea placeholder="Description"/>
            <label>Institution Logo:</label>
            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
          </div>
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
}

