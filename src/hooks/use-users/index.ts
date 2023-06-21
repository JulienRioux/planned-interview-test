import { useContext } from "react";
import { UsersContext } from "../../states/users";

export const useUsers = () => {
  return useContext(UsersContext);
};
