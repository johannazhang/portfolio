import styles from "./Contact.module.scss";
import emailIcon from "../../../../assets/icons/email.png";
import githubIcon from "../../../../assets/icons/github.png";
import linkedinIcon from "../../../../assets/icons/linkedin.png";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h2>contact</h2>
      <div>
        <a href="https://github.com/johannazhang" target="_blank">
          <img src={githubIcon} alt="github" />
        </a>
        <a href="https://linkedin.com/in/johanna-zhang" target="_blank">
          <img src={linkedinIcon} alt="linkedin" />
        </a>
        <a href="mailto:johanna.zhang01@gmail.com">
          <img src={emailIcon} alt="email" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
