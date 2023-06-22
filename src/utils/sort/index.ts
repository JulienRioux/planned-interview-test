import { IUser } from "../../states/users/types";

/**
 * This function order the users by alphabetical name ascending followed by the age descending.
 *
 * @param {users} Array of users
 * @returns Ordered array of users
 */
export const sortUsers = (users: IUser[]) => {
  return users.sort((a: IUser, b: IUser) => {
    let nameA = a.name;
    let nameB = b.name;
    let ageA = a.age;
    let ageB = b.age;

    // Sort by descending age if the users has the same names.
    if (nameA === nameB) {
      if (ageA < ageB) {
        return 1;
      } else {
        return -1;
      }
    }
    // Simple alphabetical sorting
    else if (nameA < nameB) {
      return -1;
    }
    // Otherwise nameA > nameB
    return 1;
  });
};
