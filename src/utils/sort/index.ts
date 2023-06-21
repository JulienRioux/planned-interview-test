import { IUser } from "../../states/users/types";

export const sortUsers = (user: IUser[]) => {
  return user.sort((a: IUser, b: IUser) => {
    let nameA = a.name;
    let nameB = b.name;
    let ageA = a.age;
    let ageB = b.age;

    if (nameA === nameB) {
      if (ageA < ageB) {
        return 1;
      } else {
        return -1;
      }
    } else if (nameA < nameB) {
      return -1;
    }
    // Otherwise nameA > nameB
    return 1;
  });
};
