import instance from "@/api/core/instance.ts";
import { SignInAuthDto, SignUpAuthDto } from "@/api/types/auth.dto.ts";
import { IUser } from "@/api/types/user.interface.ts";
export const authService = {
  async SignIn(payload: SignInAuthDto) {
    const { data } = await instance.post("/auth/login", {
      email: payload.email,
      password: payload.password,
    });

    return data;
  },

  async SignUp(payload: SignUpAuthDto) {
    const { data } = await instance.post<SignUpAuthDto>("auth/register", {
      email: payload.email,
      fullName: payload.fullName,
      password: payload.password,
    });

    return data;
  },

  async checkAuth() {
    const { data } = await instance.get<IUser>("user/account/me");

    return data;
  },

  async getMeAccount() {
    const { data } = await instance.get("user/account/me");

    return data;
  },

  async logoutUser() {
    const { data } = await instance.get("auth/logout");

    return data;
  },
};
