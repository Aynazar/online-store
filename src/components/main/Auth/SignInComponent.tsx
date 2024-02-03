import { FC, memo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import styles from "./auth.module.scss";
import Button from "@/components/ui/Button.tsx";
import { yupResolver } from "@hookform/resolvers/yup";
import useActions from "@/hooks/useActions.ts";
import { useAppDispatch } from "@/store/store.ts";
import { SignInAuthDto } from "@/api/types/auth.dto.ts";
interface OwnProps {
  onClick: () => void;
}

const LoginDto = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().min(6).required(),
});

const SignInComponent: FC<OwnProps> = ({ onClick }) => {
  const dispatch = useAppDispatch();
  const { fetchSignInAction } = useActions();

  const { register, handleSubmit, formState } = useForm<SignInAuthDto>({
    mode: "onChange",
    resolver: yupResolver(LoginDto),
  });

  const onSubmit = async (data: SignInAuthDto) => {
    try {
      document.body.classList.remove("no-scroll");
      dispatch(fetchSignInAction(data));
    } catch (err) {}
  };
  return (
    <>
      <form className={styles["auth"]} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles["auth-label"]}>
          E-mail
          <input
            className={styles["auth-input"]}
            type="email"
            placeholder="user@mail.ru"
            {...register("email")}
            name="email"
          />
        </label>

        <label className={styles["auth-label"]}>
          Пароль
          <input
            className={styles["auth-input"]}
            type="password"
            placeholder="qwerty"
            {...register("password")}
            name="password"
          />
        </label>
        <Button
          type="submit"
          variant="solid"
          size="sm"
          disabled={!formState.isValid || formState.isSubmitting}
        >
          Отправить
        </Button>
        <div className={styles["auth-link"]} onClick={onClick}>
          Зарегистрироваться
        </div>
      </form>
    </>
  );
};

export default memo(SignInComponent);
