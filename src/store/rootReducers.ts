import { combineReducers } from "redux";
import { userSlice } from "@/store/ducks/user/user.slice.ts";

export const rootReducers = combineReducers({
  user: userSlice.reducer,
});
