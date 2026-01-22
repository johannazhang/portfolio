import styles from "./About.module.scss";
import me from "../../../assets/images/me.png";

const AboutInfo = () => {
  return (
    <section className={styles.about}>
      <img src={me} alt=""></img>
      <div>
        <h1>hi! i'm johanna.</h1>
        <p>
          I like creating things with code 🌠 <br />I studied computer science,
          human geography and math at the University of Toronto.
        </p>
        <br />
        <p>
          On my own time, I love watching movies, reading books, walking around
          the city, pottery and crocheting sometimes, cooking and dining out,
          skating (on ice and board), playing chill games, and flying to new
          places.
        </p>
      </div>
    </section>
  );
};

export default AboutInfo;
