import users from './users.js';
import { IUser } from './User.interface';

const getNamesSortedByFriendsCount = (users: IUser[]) =>
  users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((user) => user.name);

console.log(getNamesSortedByFriendsCount(users));
