import styles from "./Footer.module.scss";
import Contact from "./contact/Contact";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Contact />
      <span>made with 💫</span>
    </footer>
  );
};

export default Footer;
