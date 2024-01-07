import type { FC } from "react";
import { memo } from "react";

import styles from "./Product.module.scss";
import { Icons } from "@/components/ui/icons/ArrowIcon.tsx";
import ArrowIconSolid = Icons.ArrowIconSolid;
import { Link } from "react-router-dom";

interface OwnProps {
  id?: number;
  title: string;
  previewUrl: string;
  info: string[];
  price: number;
}

const Product: FC<OwnProps> = ({ id, title, info, previewUrl, price }) => {
  return (
    <Link
      to={`/product/${id}`}
      className={styles["Product"]}
      aria-colindex={id}
    >
      <div className={styles["Product-content"]}>
        <div className={styles["Product-title"]}>{title}</div>
        <div className={styles["Product-preview"]}>
          <img className={styles["Product-img"]} src={previewUrl} alt={title} />
        </div>
        <ul className={styles["Product-info"]}>
          <li className={styles["Product-info-link"]}>
            <span>Корпус:</span> <p>{info}</p>
          </li>
          <li className={styles["Product-info-link"]}>
            <span>Влагозащита:</span>
            <p>ewrer23</p>
          </li>
          <li className={styles["Product-info-link"]}>
            <span>Цвет:</span>
            <p>ewrer23</p>
          </li>
        </ul>
        <div className={styles["Product-bottom"]}>
          <div className={styles["Product-price"]}>{price} руб.</div>
          <div className={styles["Product-icon"]}>
            <ArrowIconSolid />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(Product);
