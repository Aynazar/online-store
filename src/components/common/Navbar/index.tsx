import type { FC } from "react";
import { memo } from "react";
import ReactDOM from "react-dom";

import styles from "./Navbar.module.scss";
import CloseIcon from "@/components/ui/icons/CloseIcon.tsx";
import clsx from "@/utils/clsx.ts";
import useMount from "@/hooks/useMount.ts";
import NavMobile from "@/components/common/Navbar/NavMobile.tsx";

interface OwnProps {
  isOpen?: boolean;
  closeNavbar: () => void;
}

const Navbar: FC<OwnProps> = ({ isOpen, closeNavbar }) => {
  const navbarRef = document.getElementById("navbar-mobile");
  const { mount } = useMount({ isOpen });

  if (!mount || !navbarRef) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className={clsx(
        styles["Navbar"],
        !isOpen && styles["Navbar-mobile-close"],
      )}
    >
      <div
        className={clsx(
          styles["Navbar-inner"],
          !isOpen && styles["Navbar-mobile-inner-close"],
        )}
      >
        <div className={styles["Navbar-close"]} onClick={closeNavbar}>
          <CloseIcon />

          <NavMobile />
        </div>
      </div>
    </div>,
    navbarRef,
  );
};

export default memo(Navbar);
