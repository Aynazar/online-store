import type { FC } from "react";
import { memo, ReactNode } from "react";
import clsx from "../../utils/clsx";

import styles from "./Button.module.scss";

interface OwnProps {
  type?: "submit" | "reset" | "button";
  variant?: "solid" | "outline";
  size?: "sm" | "lm" | "default";
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

const Button: FC<OwnProps> = ({
  disabled,
  type,
  variant,
  children,
  className,
  onClick,
  size,
}) => {
  return (
    <button
      tabIndex={0}
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={clsx(
        styles["Button"],
        styles[`Button-${variant}`],
        styles[`Button-${size}`],
        className,
      )}
    >
      <div className={styles["Button-text"]}>{children}</div>
    </button>
  );
};

export default memo(Button);
