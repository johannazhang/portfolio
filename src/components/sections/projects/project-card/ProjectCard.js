import styles from "./ProjectCard.module.scss";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, subtitle, thumbnailSrc, slug }) => {
  return (
    <Link to={slug} className={styles.projectCard}>
      <div className={styles.thumbnail}>
        <img src={thumbnailSrc} alt={title} />
      </div>
      <div className={styles.description}>
        <h2>{title}</h2>
        <span>{subtitle}</span>
      </div>
    </Link>
  );
};

export default ProjectCard;
