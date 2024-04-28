import { IUser } from "../models/IUser";

export default class UserService {
  static getUsers(): IUser[] {
    return [
      { username: "user", password: "123" },
      { username: "admin", password: "123" },
      { username: "Rustem", password: "123" },
      { username: "Sultan", password: "123" },
    ];
  }
}
