import users from './users.js';
import { IUser } from './User.interface';

const getInactiveUsers = (users: IUser[]) =>
  users.filter((user) => !user.isActive);

console.log(getInactiveUsers(users));
