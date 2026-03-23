import styles from "./Reads.module.scss";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import apartment from "../../../../assets/images/apartment.png";
import close from "../../../../assets/icons/close.png";

const books = [
  "On Photography - Susan Sontag",
  "The Book of Disquiet - Fernando Pessoa",
  "Stoner - John Edward Williams",
  "Giovanni’s Room - James Baldwin",
  "Notes from Underground - Fyodor Dostoevsky",
  "Self-Help - Lorrie Moore",
  "A Gentleman in Moscow - Amor Towles",
  "The Sense of an Ending - Julian Barnes",
  "Charlotte - David Foenkinos",
  "Kilblind Magazine",
];

const Reads = () => {
  return (
    <section className={styles.reads}>
      <div className={styles.container}>
        <div>
          <h1>Reads</h1>
          <TypeAnimation
            sequence={[books.join("\n")]}
            wrapper="pre"
            cursor={true}
            speed={65}
          />
        </div>
        <img src={apartment} />
        <Link to="../">
          <img src={close} />
        </Link>
      </div>
    </section>
  );
};

export default Reads;
