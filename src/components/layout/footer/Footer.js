import { useContext } from "react";
import styles from "./Footer.module.scss";
import Contact from "./contact/Contact";
import { DarkModeContext } from "../../../context/DarkModeContext";

const Footer = () => {
  const darkMode = useContext(DarkModeContext);
  return (
    <footer className={styles.footer}>
      {!darkMode && <Contact />}
      <span>made with 💫</span>
    </footer>
  );
};

export default Footer;
