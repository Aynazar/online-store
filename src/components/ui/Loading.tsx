import { memo } from "react";

import styles from "./Loading.module.scss";

const Loading = () => {
  return <div className={styles["loading"]}>Loading ...</div>;
};

export default memo(Loading);
