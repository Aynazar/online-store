import { memo, FC } from "react";
import { SnackbarType } from "@/components/ui/types";

import styles from "./Snackbar.module.scss";
import clsx from "@/utils/clsx.ts";
import ReactDOM from "react-dom";
import useMount from "@/hooks/useMount.ts";
import CloseIcon from "@/components/ui/icons/CloseIcon.tsx";

interface OwnProps {
  isOpen: boolean;
  message: string;
  type: SnackbarType;
  onClose: () => void;
  timeout?: number; // ms
}

const Snackbar: FC<OwnProps> = ({
  message,
  type,
  isOpen,
  onClose,
  timeout,
}) => {
  const { mount } = useMount({ isOpen });
  const ref = document.getElementById("notifications");
  const duration = timeout ? timeout * 1000 : 5000;

  if (!mount || !ref) {
    return null;
  }

  setTimeout(() => {
    onClose();
  }, duration);

  return ReactDOM.createPortal(
    <>
      <div role="banner" className={styles["snackbar"]}>
        <div
          className={clsx(
            styles["snackbar-block"],
            !isOpen && styles["snackbar-hidden"],
            styles[`snackbar-type-${type}`],
          )}
        >
          <span>{message}</span>
          <button className={styles["snackbar-close"]} onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
      </div>
    </>,
    ref,
  );
};

export default memo(Snackbar);
