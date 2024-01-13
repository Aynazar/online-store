import { IUser } from "@/api/types/user.interface.ts";

export type SignInAuthDto = {
  email: string;
  password: string;
};
export interface SignUpAuthDto extends IUser {
  email: string;
  fullName: string;
  password: string;
}
export type RegisterAuthDto = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};
