export const sortUsers = (user: any) => {
  return user.sort((a: any, b: any) => {
    let nameA = a.name;
    let nameB = b.name;
    let ageA = a.age;
    let ageB = b.age;
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    if (nameA === nameB) {
      if (ageA < ageB) {
        return 1;
      } else {
        return -1;
      }
    }
  });
};
