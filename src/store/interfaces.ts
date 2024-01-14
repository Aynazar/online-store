import { LoadingStatus } from "@/store/ducks/types.ts";
import { IUser } from "@/api/types/user.interface.ts";
import { ICategory } from "@/api/types/category.interface.ts";

export interface IInitialState {
  data: undefined;
  status: LoadingStatus;
}

export interface IUserState {
  data: IUser | undefined;
  status: LoadingStatus;
}

export interface ICategoryState {
  data: ICategory | undefined;
  status: LoadingStatus;
}
export interface ICategoryAction {
  title: string;
  description: string;
  images: string[];
}
