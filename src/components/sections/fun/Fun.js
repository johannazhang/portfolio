import { Link } from "react-router-dom";
import { Outlet, useParams } from "react-router-dom";
import styles from "./Fun.module.scss";

const Fun = () => {
  const { slug } = useParams();

  if (slug) {
    return <Outlet />;
  }

  return (
    <section className={styles.fun}>
      <h1>
        <span className="accent-blue">/</span>fun
      </h1>
      <div>
        <Link to="./museums">
          <span>Favourite museums</span>
        </Link>
        <Link to="./farm-life">
          <span>Farm life</span>
        </Link>
        <Link to="./reads">
          <span>Reads</span>
        </Link>
      </div>
    </section>
  );
};

export default Fun;
