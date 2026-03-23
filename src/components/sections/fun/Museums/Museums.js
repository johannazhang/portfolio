import styles from "./Museums.module.scss";
import museum from "../../../../assets/images/museum.png";
import door from "../../../../assets/icons/door.png";
import { Link } from "react-router-dom";

const museums = [
  {
    title: "Tate Modern, London",
    distance: "5570 km",
    description:
      "I once ran through all the floors of the Tate during a limited stop I had. Contemporary art is my personal favourite, and this is my favourite place to see it.",
  },
  {
    title: "Guggenheim, New York",
    distance: "360 km",
    description:
      "Quite small, but I like the circular architecture and the way it shapes the viewing experience.",
  },
  {
    title: "Hirshhorn, Washington DC",
    distance: "7160 km",
    description: "& the city as a whole, for all of its free museums.",
  },
  {
    title: "Albertina, Vienna",
    distance: "680 km",
    description:
      "Worth it if you love paintings. It’s an architecturally stunning building, with lots of impressionist / post-impressionist / modernist art.",
  },
  {
    title: "Deutsche Kinemathek, Berlin",
    distance: "230 km",
    description:
      "An incredible film archive in a city known for its cinematic influence. Houses vintage media and original sets from Metropolis (1927).",
  },
  {
    title: "Autostadt, Wolfsburg",
    distance: "460 km",
    description:
      "I loved exploring all the car pavilions and saw so many cool models (including a Bugatti Veyron!). It’s truly a playground for anyone into cars.",
  },
  {
    title: "Heineken Experience, Amsterdam",
    distance: "7840 km",
    description: (
      <>
        Simply a fun and immersive time (this or{" "}
        <em>Guinness Storehouse, Dublin</em>).
      </>
    ),
  },
  {
    title: "798 Art Zone, Beijing",
    description:
      "A creative district of art galleries born from a retired military factory. Amusing to walk through, with lots of character and a diverse collection of modern art + avant-garde pieces.",
  },
];

const Museums = () => {
  return (
    <section className={styles.museum}>
      <h1>Favourite museums around the world</h1>
      <div className={styles.museums}>
        <img src={museum} />
        <div>
          {museums.map((museum, i) => (
            <p key={i} data-arrow={museum.distance}>
              <strong>{museum.title}</strong>
              <br />
              {museum.description}
            </p>
          ))}
        </div>
        <Link to="../">
          <img src={door} />
        </Link>
      </div>
    </section>
  );
};

export default Museums;
