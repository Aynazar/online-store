import { FC, memo, useCallback } from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import Button from "@/components/ui/Button.tsx";
import { useAuth } from "@/hooks/useAuth.ts";
import { useAppDispatch } from "@/store/store.ts";
import useActions from "@/hooks/useActions.ts";

interface OwnProps {
  closeNavbar: () => void;
  onOpenPopup: () => void;
}

const NavMobile: FC<OwnProps> = ({ closeNavbar, onOpenPopup }) => {
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();
  const { logout } = useActions();

  const onClickOpenPopup = useCallback(() => {
    closeNavbar();
    document.body.classList.add("no-scroll");
    onOpenPopup();
  }, []);

  const onLogout = useCallback(() => {
    dispatch(logout());
    document.body.classList.remove("no-scroll");
    window.location.reload();
  }, [dispatch]);

  return (
    <nav className={styles["NavbarMobile"]}>
      <ul className={styles["NavbarMobile-list"]}>
        <li className={styles["NavbarMobile-link"]}>
          <Link to="/category/mobiles" role="link">
            Телефоны
          </Link>
        </li>
        <li className={styles["NavbarMobile-link"]}>
          <Link to="/category/tablets" role="link">
            Планшеты
          </Link>
        </li>
        <li className={styles["NavbarMobile-link"]}>
          <Link to="/category/drons" role="link">
            Дроны
          </Link>
        </li>
        <li className={styles["NavbarMobile-link"]}>
          <Link to="/category/igrushki" role="link">
            Игрушки
          </Link>
        </li>
        <li className={styles["NavbarMobile-link"]}>
          {!isAuth ? (
            <Button
              type="button"
              variant="solid"
              size="sm"
              onClick={onClickOpenPopup}
            >
              Войти
            </Button>
          ) : (
            <Button type="button" variant="solid" size="sm" onClick={onLogout}>
              Выйти
            </Button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default memo(NavMobile);
