export const formatUser = (
  { name: { firstName, lastName }, age }: any,
  index: number
) => ({
  name: `${firstName} ${lastName}`,
  age,
  // Creating an ID since there is no one from the API
  uid: `${firstName} ${lastName}-${age}-${index}`,
});
