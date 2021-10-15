import users from './users.js';
import { IUser } from './User.interface';

const getUsersWithFriends = (users: IUser[], friendName: string) =>
  users
    .filter((user) => user.friends.includes(friendName))
    .map((user) => user.name);

console.log(getUsersWithFriends(users, 'Briana Decker'));
console.log(getUsersWithFriends(users, 'Goldie Gentry'));
