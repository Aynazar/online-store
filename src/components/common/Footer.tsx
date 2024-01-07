import { memo, useCallback } from "react";

import styles from "./Footer.module.scss";
import MouseIcon from "@/components/ui/icons/MouseIcon.tsx";
import { Link } from "react-router-dom";
import Nav from "@/components/common/Nav.tsx";
import ArrowIcon from "@/components/ui/icons/ArrowIcon.tsx";
import Button from "@/components/ui/Button.tsx";

const Footer = () => {
  const handleSlideToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <footer className={styles["Footer"]}>
      <Link to="/" className={styles["Footer-logo"]}>
        <MouseIcon />
        <div className={styles["Footer-logo-block"]}>
          <span className={styles["Footer-logo-title"]}>Гаджетариум</span>
          <span className={styles["Footer-logo-description"]}>
            Магазин цифровых решений
          </span>
        </div>
      </Link>

      <div className={styles["Footer-nav"]}>
        <Nav />
      </div>

      <div className={styles["Footer-slideToTop"]} onClick={handleSlideToTop}>
        <ArrowIcon />
      </div>
      <div className={styles["Footer-actions"]}>
        <div className={styles["Footer-number"]}>+7 9374 97 25 24</div>
        <Button type="button" variant="outline">
          Заказать звонок
        </Button>
      </div>
    </footer>
  );
};

export default memo(Footer);
