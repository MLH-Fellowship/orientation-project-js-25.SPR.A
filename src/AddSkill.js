import styles from "./AddSkill.module.css";

export default function AddEducation() {
  return(
    <div className="bodyContainer">
      <div className={styles.asMainContainer}>
        {/* Image of a logo of a school */}
        <h2>Add Skill</h2>
        {/*Image of an x to close and go back home */}
        <p>Add programming language, language, or framework you know include how proficient you are at the skill.</p>
        <div className={styles.asFormContainer}>
          <input type="text" placeholder="Skill Name"/>
          <input type="text" placeholder="Skill Proficiency"/>
          <label>Skill Logo:</label>
          <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
}

