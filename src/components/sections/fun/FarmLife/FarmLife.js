import { Link } from "react-router-dom";
import styles from "./FarmLife.module.scss";
import crops from "../../../../assets/images/crops.png";
import house from "../../../../assets/images/house.png";
import animals from "../../../../assets/images/animals.png";
import winter from "../../../../assets/images/winter.png";
import dawn from "../../../../assets/images/dawn.png";
import exit from "../../../../assets/images/exit.png";
import background from "../../../../assets/images/stardew.png";

const FarmLife = () => {
  const content = [
    { img: crops, caption: "summer_crops.png" },
    { img: house, caption: "house.png" },
    { img: animals, caption: "animals.png" },
    { img: winter, caption: "winter_with_horse.png" },
  ];

  return (
    <section className={styles.farm}>
      <img className={styles.background} src={background} />
      <h1>
        my (stardew valley) farm life <img src={dawn} />
      </h1>
      {content.map((item) => (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <img src={item.img}></img>
          </div>
          <span>{item.caption}</span>
        </div>
      ))}
      <Link to="../">
        <img className={styles.exit} src={exit} />
      </Link>
    </section>
  );
};

export default FarmLife;
