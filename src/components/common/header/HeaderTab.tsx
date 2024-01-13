import { FC, memo, useCallback } from "react";

import styles from "./header.module.scss";
import { useQuery } from "@tanstack/react-query";
import { authService } from "@/api/services/auth.service.ts";
import Button from "@/components/ui/Button.tsx";
import { useAppDispatch } from "@/store/store.ts";
import useActions from "@/hooks/useActions.ts";
import clsx from "@/utils/clsx.ts";

interface OwnProps {
  isActive: boolean;
}

const HeaderTab: FC<OwnProps> = ({ isActive }) => {
  const dispatch = useAppDispatch();
  const { logout } = useActions();
  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: authService.getMeAccount,
    enabled: true,
  });

  const onLogout = useCallback(() => {
    dispatch(logout());
    document.body.classList.remove("no-scroll");
    window.location.reload();
  }, [dispatch]);

  if (!isActive) {
    return null;
  }

  return (
    <div className={styles["header-tab"]}>
      <ul className={styles["header-tab-list"]}>
        <li className={styles["header-tab-link"]}>{data.email}</li>
        {data.roles.includes("ADMIN") && (
          <li className={clsx(styles["header-tab-link"], styles["header-add"])}>
            Добавить продукт
          </li>
        )}
        <li className={styles["header-tab-link"]}>
          <Button type="button" variant="solid" size="sm" onClick={onLogout}>
            Выйти
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default memo(HeaderTab);
