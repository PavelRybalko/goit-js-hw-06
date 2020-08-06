import users from "./users.js";

const getUsersEyeColor = (users, color) =>
  users.filter((user) => user.eyeColor === color);

console.log(getUsersEyeColor(users, "blue"));
