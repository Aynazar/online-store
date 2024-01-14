import { createAsyncThunk } from "@reduxjs/toolkit";
import { categoryService } from "@/api/services/category/category.service.ts";
import { ICategoryPayload } from "@/api/types/category.interface.ts";

export const fetchCategoryAction = createAsyncThunk<any, ICategoryPayload>(
  "category/FETCH_CATEGORY",
  async (data, thunkApi) => {
    try {
      const res = await categoryService.createCategory(data);
      return res;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  },
);

export const getCategoryAction = createAsyncThunk<any, string>(
  "category/GET_CATEGORY",
  async (data, thunkApi) => {
    try {
      const res = await categoryService.getCategory(data);

      return res;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  },
);

export const GetAllCategoryAction = createAsyncThunk(
  "category/GET_ALL_CATEGORY",
  async (_, thunkApi) => {
    try {
      return await categoryService.getAllCategory();
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  },
);
