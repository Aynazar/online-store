import { LoadingStatus } from "@/store/ducks/types.ts";
import { IUser } from "@/api/types/user.interface.ts";

export interface IInitialState {
  data: undefined;
  status: LoadingStatus;
}

export interface IUserState {
  data: IUser | undefined;
  status: LoadingStatus;
}
