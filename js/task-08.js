import users from "./users.js";

const getUsersWithFriends = (users, friendName) =>
  users
    .filter((user) => user.friends.includes(friendName))
    .map((user) => user.name);

console.log(getUsersWithFriends(users, "Briana Decker"));
console.log(getUsersWithFriends(users, "Goldie Gentry"));
