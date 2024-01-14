//@ts-nocheck
import { memo, useEffect } from "react";
import Inner from "@/components/main/Inner";

import styles from "./Main.module.scss";
import Product from "@/components/main/Product";
import Slider from "@/components/ui/Slider.tsx";
import Receipts from "@/components/main/Receipts";
import AboutIt from "@/components/main/AboutIt";
import clsx from "@/utils/clsx.ts";
import { useQuery } from "@tanstack/react-query";
import { productService } from "@/api/services/products/product.service.ts";
import { IProduct } from "@/api/types/product.interface.ts";
import { useAppDispatch } from "@/store/store.ts";
import useActions from "@/hooks/useActions.ts";
import { useTypedSelector } from "@/hooks/useTypedSelector.ts";

const Main = () => {
  const dispatch = useAppDispatch();
  const categoryData = useTypedSelector((state) => state.category?.data);
  const { GetAllCategoryAction } = useActions();

  const { data } = useQuery({
    queryKey: ["product"],
    queryFn: productService.getAllProducts,
  });

  useEffect(() => {
    dispatch(GetAllCategoryAction);
  }, [dispatch]);

  /*const randomId = getRandomInt(1, 5);
  const objs = categoryData!.filter((state) => state.id !== randomId);*/

  if (!categoryData) return null;

  return (
    <>
      <Inner />
      <div className={styles["Main-products"]}>
        <div className={styles["Main-title"]}>Горчие поступления</div>
        <ul className={styles["Main-sort"]}>
          <li
            className={clsx(
              styles["Main-sort-link"],
              styles["Main-sort-link-active"],
            )}
            aria-label="Все"
          >
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
          {data?.data.map((obj: IProduct) => <Product {...obj} key={obj.id} />)}
        </Slider>
      </div>

      <div className={styles["Main-receipts"]}>
        <Receipts receipts={categoryData} />
      </div>

      <div className={styles["Main-catalog"]}>
        <div className={styles["Main-title"]}>Каталог товаров</div>
        <div className={styles["Main-catalog-item"]}>
          {data?.data.map((obj: IProduct) => <Product {...obj} key={obj.id} />)}
        </div>
      </div>

      <div className={styles["Main-about"]}>
        <div className={styles["Main-title"]} style={{ paddingBottom: "50px" }}>
          О “Гаджетариуме” в цифрах
        </div>
        <AboutIt />
      </div>
    </>
  );
};

export default memo(Main);
