import users from './users.js';
import { IUser } from './User.interface';

const getUsersWithAge = (users: IUser[], min: number, max: number) =>
  users.filter((user) => user.age >= min && user.age <= max);

console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));
