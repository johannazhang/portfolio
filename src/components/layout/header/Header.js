import { Link } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.name}>
        Johanna Zhang
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
