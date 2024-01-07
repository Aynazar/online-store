import { memo } from "react";
import Inner from "@/components/main/Inner";

import styles from "./Main.module.scss";
import { ProductsData } from "@/data/ProductsData.ts";
import Product from "@/components/main/Product";
import Slider from "@/components/ui/Slider.tsx";
import Receipts from "@/components/main/Receipts";
import { DReceipts } from "@/data/ReceiptsData.ts";
import getRandomInt from "@/utils/getRandomInt.ts";
import AboutIt from "@/components/main/AboutIt";

const Main = () => {
  const randomId = getRandomInt(1, DReceipts.length);
  const objs = DReceipts.filter((el) => el.id !== randomId);
  return (
    <>
      <Inner />
      <div className={styles["Main-products"]}>
        <div className={styles["Main-title"]}>Горчие поступления</div>
        <ul className={styles["Main-sort"]}>
          <li className={styles["Main-sort-link"]} aria-label="Все">
            Все
          </li>
          <li className={styles["Main-sort-link"]} aria-label="Телефоны">
            Телефоны
          </li>
          <li className={styles["Main-sort-link"]} aria-label="Планшеты">
            Планшеты
          </li>
          <li className={styles["Main-sort-link"]} aria-label="Дроны">
            Дроны
          </li>
          <li className={styles["Main-sort-link"]} aria-label="Игрушки">
            Игрушки
          </li>
        </ul>
      </div>
      <div className={styles["Main-products-item"]}>
        <Slider>
          {ProductsData.map((data) => (
            <Product {...data} key={data.id} />
          ))}
        </Slider>
      </div>

      <div className={styles["Main-receipts"]}>
        <Receipts receipts={objs} />
      </div>

      <div className={styles["Main-catalog"]}>
        <div className={styles["Main-title"]}>Каталог товаров</div>
        <div className={styles["Main-catalog-item"]}>
          {ProductsData.map((obj) => (
            <Product {...obj} key={obj.id} />
          ))}
        </div>
      </div>

      <div className={styles["Main-about"]}>
        <div className={styles["Main-title"]} style={{ paddingBottom: "5rem" }}>
          О “Гаджетариуме” в цифрах
        </div>
        <AboutIt />
      </div>
    </>
  );
};

export default memo(Main);
