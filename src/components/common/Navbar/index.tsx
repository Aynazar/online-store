import type { FC } from "react";
import { memo } from "react";
import ReactDOM from "react-dom";

import styles from "./Navbar.module.scss";
import CloseIcon from "@/components/ui/icons/CloseIcon.tsx";

interface OwnProps {
  isOpen?: boolean;
  closeNavbar: () => void;
}

const Navbar: FC<OwnProps> = ({ isOpen, closeNavbar }) => {
  const navbarRef = document.getElementById("navbar-mobile");

  if (!isOpen || !navbarRef) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={styles["Navbar"]}>
      <div className={styles["Navbar-inner"]}>
        <div className={styles["Navbar-close"]} onClick={closeNavbar}>
          <CloseIcon />
        </div>
      </div>
    </div>,
    navbarRef,
  );
};

export default memo(Navbar);
