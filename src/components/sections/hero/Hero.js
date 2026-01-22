import { Link } from "react-router-dom";
import styles from "./Hero.module.scss";
import heroImage from "../../../assets/images/hero.png";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div>
        <img src={heroImage} alt=""></img>
        <h1>software engineer</h1>
        <p>
          Interested in frontend development and crafting thoughtful user
          designs
        </p>
      </div>
      <Link to="/portfolio">See my work &gt;&gt;</Link>
    </section>
  );
};

export default Hero;
