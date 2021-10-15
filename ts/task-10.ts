import users from './users.js';
import { IUser } from './User.interface';

const getSortedUniqueSkills = (users: IUser[]) =>
  users
    .reduce((acc, user) => [...user.skills, ...acc], [])
    .filter((itm, idx, arr) => arr.indexOf(itm) === idx)
    .sort();

console.log(getSortedUniqueSkills(users));
