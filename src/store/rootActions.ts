import * as userActions from "./ducks/user/user.actions.ts";
import * as categoryActions from "./ducks/category/category.actions.ts";

export const rootActions = {
  ...userActions,
  ...categoryActions,
};
