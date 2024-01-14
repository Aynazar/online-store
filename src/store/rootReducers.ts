import { combineReducers } from "redux";
import { userSlice } from "@/store/ducks/user/user.slice.ts";
import { categorySlice } from "@/store/ducks/category/category.slice.ts";

export const rootReducers = combineReducers({
  user: userSlice.reducer,
  category: categorySlice.reducer,
});
