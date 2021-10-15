import users from './users.js';
import { IUser } from './User.interface';

const getUsersWithGender = (users: IUser[], gender: string) =>
  users.filter((user) => user.gender === gender);

console.log(getUsersWithGender(users, 'male'));
