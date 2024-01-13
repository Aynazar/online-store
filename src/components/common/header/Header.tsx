import { memo, useCallback, useState } from "react";

import MouseIcon from "../../ui/icons/MouseIcon.tsx";

import styles from "./header.module.scss";
import Nav from "../Nav.tsx";
import { Link } from "react-router-dom";
import Button from "../../ui/Button.tsx";
import Navbar from "@/components/common/Navbar";
import Popup from "@/components/ui/popup.tsx";
import AuthPopup from "@/components/main/Auth";
import { useAuth } from "@/hooks/useAuth.ts";
import HeaderProfile from "@/components/common/header/HeaderProfile.tsx";

const Header = () => {
  const { isAuth } = useAuth();
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onClickBurger = useCallback(() => {
    setIsOpen(true);
    document.body.classList.add("no-scroll");
  }, []);

  const onClose = useCallback(() => {
    document.body.classList.remove("no-scroll");
    setIsOpen(false);
  }, []);

  const onOpenPopup = useCallback(() => {
    document.body.classList.add("no-scroll");
    setIsOpenPopup(true);
  }, []);

  const onClosePopup = useCallback(() => {
    document.body.classList.remove("no-scroll");
    setIsOpenPopup(false);
  }, []);

  return (
    <header className={styles["header"]}>
      <div className={styles["header-container"]}>
        <div className={styles["header-inner"]}>
          <Link to="/" className={styles["header-logo"]}>
            <MouseIcon />
            <div className={styles["header-logo-block"]}>
              <span className={styles["header-logo-title"]}>Гаджетариум</span>
              <span className={styles["header-logo-description"]}>
                Магазин цифровых решений
              </span>
            </div>
          </Link>
          <div className={styles["header-nav"]}>
            <Nav />
          </div>

          <div className={styles["header-action"]}>
            <div className={styles["header-number"]}>+7 9374 97 25 24</div>
            <Button type="button" variant="outline">
              Заказать звонок
            </Button>
            <div className={styles["header-profile"]}>
              {!isAuth ? (
                <Button
                  type="button"
                  variant="solid"
                  size="sm"
                  onClick={onOpenPopup}
                >
                  Войти
                </Button>
              ) : (
                <HeaderProfile wallet={122} />
              )}
            </div>
          </div>
          <div className={styles["header-menu"]} onClick={onClickBurger}>
            <div className={styles["header-burger"]} />
          </div>
          <Navbar
            isOpen={isOpen}
            closeNavbar={onClose}
            onOpenPopup={() => setIsOpenPopup(true)}
          />
        </div>
      </div>
      <Popup isOpen={isOpenPopup} onClose={onClosePopup}>
        <AuthPopup />
      </Popup>
    </header>
  );
};

export default memo(Header);
