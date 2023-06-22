import { IUserFromDB } from "../../states/users/types";

/**
 * This function format the user full name, create an UID and remove unneeded values.
 *
 * @param {user} Single user from API.
 * @returns Formated user.
 */
export const formatUser = (
  { name: { firstName, lastName }, age }: IUserFromDB,
  index: number
) => ({
  name: `${firstName} ${lastName}`,
  age,
  // This should be coming from the DB but it's ok for this project.
  // Creating an ID since there is no one from the API
  uid: `${firstName} ${lastName}-${age}-${index}`,
});
