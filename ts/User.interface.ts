export interface IUser {
  id: string | null;
  name: string | null;
  email: string | null;
  eyeColor: string | null;
  friends: string[];
  isActive: boolean;
  balance: number | null;
  skills: string[];
  gender: string | null;
  age: number | null;
}
