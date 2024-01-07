//@ts-nocheck
import { ChangeEvent, memo, useCallback, useState } from "react";

import styles from "./Inner.module.scss";

import droneImg from "../../../../src/assets/images/drone.png";
import bgInner from "../../../../src/assets/images/bg-inner.jpg";
import Button from "../../ui/Button.tsx";
import ArrowIcon from "../../ui/icons/ArrowIcon.tsx";
import clsx from "../../../utils/clsx.ts";

const products = [
  {
    img: droneImg,
    name: "DJI Mavik Pro",
    price: 4500,
    description:
      "32 MP Sphere Panoramas Foldable & Portable 3-Axis Gimbal & 4K Camera",
  },
  {
    img: droneImg,
    name: "DJI Mavik Pro 2000",
    price: 9900,
    description:
      "32 MP Sphere Panoramas Foldable & Portable 3-Axis Gimbal & 4K Camera",
  },
  {
    img: droneImg,
    name: "DJI Mavarik",
    price: 1200,
    description:
      "32 MP Sphere Panoramas Foldable & Portable 3-Axis Gimbal & 4K Camera",
  },
  {
    img: droneImg,
    name: "DJI Augus Pro",
    price: 5000,
    description:
      "32 MP Sphere Panoramas Foldable & Portable 3-Axis Gimbal & 4K Camera",
  },
];

const Inner = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const onSlide = useCallback(() => {
    products.length === activeSlide + 1
      ? setActiveSlide(0)
      : setActiveSlide((c) => c + 1);
  }, [activeSlide]);

  const onClickButton = useCallback(
    (index: number, e: ChangeEvent<HTMLButtonElement>) => {
      if (index >= activeSlide) {
        e.currentTarget.classList.add(styles["Inner-swiper-dot-active"]);
        setActiveSlide(index);
        console.log(index);
      } else {
        e.currentTarget.classList.add(styles["Inner-swiper-dot-active"]);
        setActiveSlide(0);
      }
    },
    [],
  );

  return (
    <div className={styles["Inner"]}>
      <div className={styles["Inner-item"]}>
        <div className={styles["Inner-title"]}>
          Яркие гаджеты на любой вкус и день
        </div>
        <div className={styles["Inner-description"]}>
          Мы собрали лучшие гаджеты от лучших брендов, чтобы порадовать вас
          свежими новинками digital-рынка.
        </div>
        <Button variant="solid" type="submit">
          Смотреть каталог
        </Button>
      </div>
      <div className={styles["Inner-item"]}>
        <div
          className={styles["Inner-image"]}
          style={{ backgroundImage: `url(${bgInner})` }}
        />
        <div className={styles["Inner-image-container"]}>
          {products.map((obj, index) => (
            <div
              key={index}
              className={clsx(
                styles["Inner-slide"],
                index === activeSlide && styles["Inner-slide--visible"],
              )}
            >
              <div
                className={styles["Inner-droneImg"]}
                style={{
                  backgroundImage: `url(${obj.img})`,
                  width: 680,
                  height: 374,
                }}
              />
              <div className={styles["Inner-info"]}>
                <div className={styles["Inner-info-title"]}>{obj.name}</div>
                <div className={styles["Inner-info-description"]}>
                  {obj.description}
                </div>
                <div className={styles["Inner-info-price"]}>
                  {obj.price} руб.
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles["Inner-swiper"]}>
          {products.map((el, index) => (
            <button
              key={el.name}
              className={clsx(
                styles["Inner-swiper-dot"],
                index === activeSlide && styles["Inner-swiper-dot-active"],
              )}
              tabIndex={index}
              type="button"
              onClick={(e) => onClickButton(index, e)}
            />
          ))}
        </div>
        <Button className={styles["Inner-icon"]} onClick={onSlide}>
          <ArrowIcon />
        </Button>
      </div>
    </div>
  );
};

export default memo(Inner);
