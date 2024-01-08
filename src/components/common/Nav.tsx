import { memo } from "react";

import styles from "./nav.module.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={styles["nav"]}>
      <ul className={styles["nav-list"]}>
        <li className={styles["nav-link"]}>
          <Link to="/category/mobiles">Телефоны</Link>
        </li>
        <li className={styles["nav-link"]}>
          <Link to="/category/tablets">Планшеты</Link>
        </li>
        <li className={styles["nav-link"]}>
          <Link to="/category/drons">Дроны</Link>
        </li>
        <li className={styles["nav-link"]}>
          <Link to="/category/igrushki">Игрушки</Link>
        </li>
      </ul>
    </nav>
  );
};

export default memo(Nav);
