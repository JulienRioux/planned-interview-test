import { FormEvent, ReactNode } from "react";

export interface UserProviderProps {
  children: ReactNode;
}

export interface IUser {
  name: string;
  age: number;
  uid: string;
}

export interface IUsersContext {
  isLoading: boolean;
  users: IUser[];
  getUsers: () => void;
  handleMinMaxAgeChange: (e: FormEvent<HTMLInputElement>) => void;
  minAge: number;
  maxAge: number;
}
