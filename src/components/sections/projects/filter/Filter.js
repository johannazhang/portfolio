import styles from "./Filter.module.scss";
import { NavLink } from "react-router-dom";

const Filter = ({ filters }) => {
  return (
    <div className={styles.filter}>
      {filters.map(({ name, link, exact }) => (
        <NavLink
          key={link}
          to={link}
          end={exact}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          {name}
        </NavLink>
      ))}
    </div>
  );
};

export default Filter;
