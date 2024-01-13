import { LoadingStatus } from "@/store/ducks/types.ts";
import { IUserState } from "@/store/interfaces.ts";
import { createSlice } from "@reduxjs/toolkit";
import {
  checkAuth,
  fetchSignInAction,
  fetchSignUpAction,
  logout,
} from "@/store/ducks/user/user.actions.ts";

const initialState: IUserState = {
  data: undefined,
  status: LoadingStatus.NEVER,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSignInAction.pending, (state) => {
        state.status = LoadingStatus.LOADING;
      })
      .addCase(fetchSignInAction.fulfilled, (state, action) => {
        state.status = LoadingStatus.LOADED;
        state.data = action.payload;
      })
      .addCase(fetchSignInAction.rejected, (state) => {
        state.status = LoadingStatus.ERROR;
      })

      .addCase(fetchSignUpAction.pending, (state) => {
        state.status = LoadingStatus.LOADING;
      })
      .addCase(fetchSignUpAction.fulfilled, (state, action) => {
        state.status = LoadingStatus.LOADED;
        state.data = action.payload;
      })
      .addCase(fetchSignUpAction.rejected, (state) => {
        state.status = LoadingStatus.ERROR;
      })

      .addCase(checkAuth.pending, (state) => {
        state.status = LoadingStatus.LOADING;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.status = LoadingStatus.LOADED;
        state.data = action.payload;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.status = LoadingStatus.ERROR;
      })

      .addCase(logout.pending, (state) => {
        state.status = LoadingStatus.LOADING;
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = LoadingStatus.SUCCESS;
        state.data = undefined;
      })
      .addCase(logout.rejected, (state) => {
        state.status = LoadingStatus.ERROR;
      });
  },
});
