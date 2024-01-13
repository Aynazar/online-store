import { FC, memo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import styles from "./auth.module.scss";
import Button from "@/components/ui/Button.tsx";
import { yupResolver } from "@hookform/resolvers/yup";
import useActions from "@/hooks/useActions";
import { useAppDispatch } from "@/store/store.ts";
import { RegisterAuthDto } from "@/api/types/auth.dto.ts";

interface OwnProps {
  onClick: () => void;
}

const RegisterDto = yup.object().shape({
  email: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  password: yup.string().min(6).required(),
});

const SignInComponent: FC<OwnProps> = ({ onClick }) => {
  const dispatch = useAppDispatch();
  const { fetchSignUpAction } = useActions();

  const { register, handleSubmit, formState } = useForm<RegisterAuthDto>({
    mode: "onChange",
    resolver: yupResolver(RegisterDto),
  });
  const onSubmit = async (data: RegisterAuthDto) => {
    try {
      dispatch(
        fetchSignUpAction({
          email: data.email,
          password: data.password,
          fullName: `${data.firstName} ${data.lastName}`,
        }),
      );
    } catch (err) {
      console.error(err);
    }
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
          Имя
          <input
            className={styles["auth-input"]}
            type="text"
            placeholder="Иван"
            {...register("firstName")}
            name="firstName"
          />
        </label>

        <label className={styles["auth-label"]}>
          Фамилия
          <input
            className={styles["auth-input"]}
            type="text"
            placeholder="Иванов"
            {...register("lastName")}
            name="lastName"
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
          Войти
        </div>
      </form>
    </>
  );
};

export default memo(SignInComponent);
