import { memo, useCallback, useState } from "react";

import type { FC } from "react";

import styles from "./Receipts.module.scss";
import { TReceiptsData } from "@/data/ReceiptsData.ts";
import { useNavigate } from "react-router-dom";

interface OwnProps {
  receipts: TReceiptsData[];
}

const Receipts: FC<OwnProps> = ({ receipts }) => {
  const [receiptsInfo] = useState<TReceiptsData[]>(receipts);

  const navigate = useNavigate();

  const onLink = useCallback((collection: string) => {
    navigate(`/category/${collection}`);
  }, []);

  return (
    <div className={styles["receipts"]}>
      <div
        aria-label={receiptsInfo[0].collection}
        className={styles["receipts-item"]}
        onClick={() => onLink(receiptsInfo[0].collection)}
      >
        <div
          className={styles["receipts-preview"]}
          style={{ backgroundImage: `url(${receiptsInfo[0].previewUrl})` }}
        />
        <div
          className={styles["receipts-info"]}
          style={{ padding: "17.8rem 13.1rem 13.1rem 7.3rem" }}
        >
          <div className={styles["receipts-title"]}>
            {receiptsInfo[0].title}
          </div>
          <div className={styles["receipts-description"]}>
            {receiptsInfo[0].description}
          </div>
        </div>
      </div>
      <div
        aria-label={receiptsInfo[1].collection}
        className={styles["receipts-item"]}
        onClick={() => onLink(receiptsInfo[1].collection)}
      >
        <div
          className={styles["receipts-preview"]}
          style={{ backgroundImage: `url(${receiptsInfo[1].previewUrl})` }}
        />
        <div className={styles["receipts-info"]}>
          <div className={styles["receipts-title"]}>
            {receiptsInfo[1].title}
          </div>
          <div className={styles["receipts-description"]}>
            {receiptsInfo[1].description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Receipts);