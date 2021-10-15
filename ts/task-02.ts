import users from './users.js';
import { IUser } from './User.interface';

const getUsersEyeColor = (users: IUser[], color: string) =>
  users.filter((user) => user.eyeColor === color);

console.log(getUsersEyeColor(users, 'blue'));
