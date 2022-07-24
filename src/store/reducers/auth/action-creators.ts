import { IUser } from "../../../models/IUser";
import { AuthActionEnum, SetUserAction } from "./types";

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionEnum.SET_USER,
    payload: user,
  }),
};
