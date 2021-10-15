import users from './users.js';
import { IUser } from './User.interface';

// type TUsers = typeof users;
// type MapFn = (users: IUser[]) => IUser[];

// const getUserNames: MapFn = (users) => users.map((user) => user.name);
const getUserNames = (users: IUser[]) => users.map((user) => user.name);
console.table(getUserNames(users));
