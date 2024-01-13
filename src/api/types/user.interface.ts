export interface IUser {
  id: string;
  fullName: string;
  email: string;
  password: string;
  roles: Role[];
}

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}
