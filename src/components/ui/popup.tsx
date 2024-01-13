import type { FC, PropsWithChildren } from "react";
import { memo } from "react";

import styles from "./popup.module.scss";
import useMount from "@/hooks/useMount.ts";
import ReactDOM from "react-dom";
import clsx from "@/utils/clsx.ts";
import CloseIcon from "@/components/ui/icons/CloseIcon.tsx";

interface OwnProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup: FC<PropsWithChildren<OwnProps>> = ({
  isOpen,
  onClose,
  children,
}) => {
  const { mount } = useMount({ isOpen });
  const navbarRef = document.getElementById("popup");

  if (!mount || !navbarRef) {
    return null;
  }
  return ReactDOM.createPortal(
    <>
      <div
        className={clsx(
          styles["popup-overlay"],
          !isOpen && styles["popup-overlay-close"],
        )}
      >
        <button
          type="button"
          role="button"
          className={styles["popup-close"]}
          onClick={onClose}
        >
          <CloseIcon />
        </button>
        <div
          className={clsx(
            styles["popup-content"],
            !isOpen && styles["popup-content-close"],
          )}
        >
          {children}
        </div>
      </div>
    </>,
    navbarRef,
  );
};

export default memo(Popup);
