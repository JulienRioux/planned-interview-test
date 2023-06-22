export const API_URL = "http://localhost:8099";

export const routes = {
  users: {
    kids: `${API_URL}/users/kids`,
    adults: `${API_URL}/users/adults`,
    seniors: `${API_URL}/users/seniors`,
  },
};

export const API_USER_ROUTES = [
  routes.users.kids,
  routes.users.adults,
  routes.users.seniors,
];
