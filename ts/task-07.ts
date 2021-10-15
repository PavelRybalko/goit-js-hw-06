import users from './users.js';
import { IUser } from './User.interface';

const calculateTotalBalance = (users: IUser[]) =>
  users.reduce((acc, user) => acc + user.balance, 0);

console.log(calculateTotalBalance(users));
