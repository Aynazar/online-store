import { memo } from "react";

import styles from "./AboutIt.module.scss";

const AboutIt = () => {
  return (
    <div className={styles["AboutIt"]}>
      <div className={styles["AboutIt-item"]}>
        <span>58</span> Филиалов по всей стране
      </div>
      <div className={styles["AboutIt-item"]}>
        <span>379</span> Товаров в каталоге
      </div>
      <div className={styles["AboutIt-item"]}>
        <span>4688</span> Покупателей
      </div>
      <div className={styles["AboutIt-item"]}>
        <span>12</span> Часов доставка по городам
      </div>
    </div>
  );
};

export default memo(AboutIt);
