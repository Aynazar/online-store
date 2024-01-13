import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "@/api/services/auth.service.ts";
import { SignInAuthDto, SignUpAuthDto } from "@/api/types/auth.dto.ts";
import { IUser } from "@/api/types/user.interface.ts";
import Cookies from "js-cookie";

export const fetchSignInAction = createAsyncThunk<IUser, SignInAuthDto>(
  "user/SIGN_IN",
  async (data, thunkApi) => {
    try {
      const res = await authService.SignIn(data);

      Cookies.set("accessToken", res.accessToken);

      return res;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  },
);

export const fetchSignUpAction = createAsyncThunk<IUser, SignUpAuthDto>(
  "user/SIGN_UP",
  async (data, thunkApi) => {
    try {
      const res = await authService.SignUp(data);

      return res;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  },
);

export const checkAuth = createAsyncThunk(
  "user/CHECK_AUTH",
  async (_, thunkApi) => {
    try {
      const res = await authService.checkAuth();
      return res;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  },
);

export const logout = createAsyncThunk("user/LOGOUT", async (_, thunkApi) => {
  try {
    const res = await authService.logoutUser();

    console.log(">>> REMOVING");
    Cookies.remove("accessToken");

    return res;
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});
