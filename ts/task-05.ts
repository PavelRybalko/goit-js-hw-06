import users from './users.js';
import { IUser } from './User.interface';

const getUserWithEmail = (users: IUser[], email: string) =>
  users.find((user) => user.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
