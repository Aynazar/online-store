import type { FC } from "react";
import { memo } from "react";

import styles from "./Product.module.scss";
import { Icons } from "@/components/ui/icons/ArrowIcon.tsx";
import ArrowIconSolid = Icons.ArrowIconSolid;
import { Link } from "react-router-dom";
interface OwnProps {
  id: string;
  title: string;
  price: number;
  userId: string;
  images: string[];
  description: string[];
}

const Product: FC<OwnProps> = ({
  id,
  title,
  price,
  description,
  images,
  userId,
}) => {
  return (
    <Link
      to={`/product/${id}`}
      className={styles["Product"]}
      aria-label={id}
      about={`user ${userId}`}
    >
      <div className={styles["Product-content"]}>
        <div className={styles["Product-inside"]}>
          <div className={styles["Product-title"]} title={title}>
            {title}
          </div>
          <picture className={styles["Product-preview"]}>
            <img
              className={styles["Product-img"]}
              src={images[0]}
              alt={title}
              about={title}
              style={{ width: "191px", height: "213px" }}
            />
          </picture>
          <ul className={styles["Product-info"]}>
            <li className={styles["Product-info-link"]}>
              <span>Корпус:</span> <p>{description[0]}</p>
            </li>
            <li className={styles["Product-info-link"]}>
              <span>Влагозащита:</span>
              <p>{description[1]}</p>
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
      </div>
    </Link>
  );
};

export default memo(Product);
