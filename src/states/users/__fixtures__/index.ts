// Fixtures used in our tests.

export const KIDS_DATA = {
  data: [
    {
      age: 6,
      country: "Kiribati",
      email: "Anika.McLaughlin90@yahoo.com",
      name: { firstName: "Clay", lastName: "Davis" },
    },
    {
      age: 7,
      country: "Palau",
      email: "Monte37@hotmail.com",
      name: { firstName: "Jordy", lastName: "Toy" },
    },
    {
      age: 2,
      country: "Yemen",
      email: "Aidan_Veum@yahoo.com",
      name: { firstName: "Bob", lastName: "Bissonnette" },
    },
  ],
};

export const ADULTS_DATA = {
  data: [
    {
      age: 25,
      country: "Hong Kong",
      email: "Hank46@gmail.com",
      name: { firstName: "Ressie", lastName: "Crooks" },
    },
    {
      age: 56,
      country: "Maldives",
      email: "Laron38@hotmail.com",
      name: { firstName: "Rico", lastName: "Hoppe" },
    },
    {
      age: 39,
      country: "United Kingdom",
      email: "Jerel.Morar@gmail.com",
      name: { firstName: "Bob", lastName: "Bissonnette" },
    },
  ],
};

export const SENIORS_DATA = [
  {
    age: 87,
    country: "Namibia",
    email: "Caitlyn_Von32@gmail.com",
    name: { firstName: "Stuart", lastName: "Trantow" },
  },
  {
    age: 99,
    country: "Liberia",
    email: "Juliana.Anderson@yahoo.com",
    name: { firstName: "Miguel", lastName: "Abernathy" },
  },
  {
    age: 76,
    country: "Monaco",
    email: "Shanny_Ullrich@yahoo.com",
    name: { firstName: "Bob", lastName: "Bissonnette" },
  },
];

export const SORTED_USERS = [
  { name: "Bob Bissonnette", age: 76, uid: "Bob Bissonnette-76-2" },
  { name: "Bob Bissonnette", age: 39, uid: "Bob Bissonnette-39-2" },
  { name: "Bob Bissonnette", age: 2, uid: "Bob Bissonnette-2-2" },
  { name: "Clay Davis", age: 6, uid: "Clay Davis-6-0" },
  { name: "Jordy Toy", age: 7, uid: "Jordy Toy-7-1" },
  { name: "Miguel Abernathy", age: 99, uid: "Miguel Abernathy-99-1" },
  { name: "Ressie Crooks", age: 25, uid: "Ressie Crooks-25-0" },
  { name: "Rico Hoppe", age: 56, uid: "Rico Hoppe-56-1" },
  { name: "Stuart Trantow", age: 87, uid: "Stuart Trantow-87-0" },
];

export const FILTER_1_USERS_RESULT = [
  { name: "Bob Bissonnette", age: 76, uid: "Bob Bissonnette-76-2" },
  { name: "Bob Bissonnette", age: 39, uid: "Bob Bissonnette-39-2" },
  { name: "Bob Bissonnette", age: 2, uid: "Bob Bissonnette-2-2" },
];

export const FILTER_2_USERS_RESULT = [
  { name: "Bob Bissonnette", age: 76, uid: "Bob Bissonnette-76-2" },
  { name: "Bob Bissonnette", age: 39, uid: "Bob Bissonnette-39-2" },
];

export const FILTER_3_USERS_RESULT = [
  { name: "Bob Bissonnette", age: 39, uid: "Bob Bissonnette-39-2" },
];
