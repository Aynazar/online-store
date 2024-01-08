import { memo } from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const NavMobile = () => {
  return (
    <nav className={styles["NavbarMobile"]}>
      <ul className={styles["NavbarMobile-list"]}>
        <li className={styles["NavbarMobile-link"]}>
          <Link to="/category/mobiles" role="link">
            Телефоны
          </Link>
        </li>
        <li className={styles["NavbarMobile-link"]}>
          <Link to="/category/tablets" role="link">
            Планшеты
          </Link>
        </li>
        <li className={styles["NavbarMobile-link"]}>
          <Link to="/category/drons" role="link">
            Дроны
          </Link>
        </li>
        <li className={styles["NavbarMobile-link"]}>
          <Link to="/category/igrushki" role="link">
            Игрушки
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default memo(NavMobile);
