import { ICategoryState } from "@/store/interfaces.ts";
import { LoadingStatus } from "@/store/ducks/types.ts";
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCategoryAction,
  GetAllCategoryAction,
  getCategoryAction,
} from "@/store/ducks/category/category.actions.ts";

const initialState: ICategoryState = {
  data: undefined,
  status: LoadingStatus.NEVER,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategoryAction.pending, (state) => {
        state.status = LoadingStatus.LOADING;
      })
      .addCase(getCategoryAction.fulfilled, (state, action) => {
        state.status = LoadingStatus.LOADED;
        state.data = action.payload;
      })
      .addCase(getCategoryAction.rejected, (state) => {
        state.status = LoadingStatus.ERROR;
        state.data = undefined;
      })
      .addCase(GetAllCategoryAction.pending, (state) => {
        state.status = LoadingStatus.LOADING;
      })
      .addCase(GetAllCategoryAction.fulfilled, (state, action) => {
        state.status = LoadingStatus.LOADED;
        state.data = action.payload;
      })
      .addCase(GetAllCategoryAction.rejected, (state) => {
        state.status = LoadingStatus.ERROR;
      })
      .addCase(fetchCategoryAction.pending, (state) => {
        state.status = LoadingStatus.LOADING;
      })
      .addCase(fetchCategoryAction.fulfilled, (state, action) => {
        state.status = LoadingStatus.LOADED;
        state.data = action.payload;
      })
      .addCase(fetchCategoryAction.rejected, (state) => {
        state.status = LoadingStatus.ERROR;
      });
  },
});
