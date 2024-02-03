import { memo } from "react";

import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles["_loading"]}>
      <div className={styles["loading"]}></div>
    </div>
  );
};

export const CSSSpinner = () => {
  return (
    <div className={styles["_loading"]}>
      <div className={styles["loader"]}>Loading...</div>
    </div>
  );
};

export default memo(Loading);
