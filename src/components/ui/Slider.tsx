import type { FC, ReactNode } from "react";
import { memo } from "react";

import styles from "./Slider.module.scss";
import { Icons } from "@/components/ui/icons/ArrowIcon.tsx";
import ArrowIconSlider = Icons.ArrowIconSlider;
import clsx from "@/utils/clsx.ts";

interface OwnProps {
  children?: ReactNode;
}

const Slider: FC<OwnProps> = ({ children }) => {
  return (
    <section className={styles["Slider"]}>
      <button
        role="button"
        className={clsx(styles["Slider-button"], styles["Slider-buttonLeft"])}
      >
        <ArrowIconSlider />
      </button>
      <div className={styles["Slider-content"]}>
        <div className={styles["SliderMain"]}>{children}</div>
      </div>
      <button role="button" className={styles["Slider-button"]}>
        <ArrowIconSlider />
      </button>
    </section>
  );
};

export default memo(Slider);
