import { User } from "@/types";

const SET_USER_INFO = 'user/SET_USER_INFO';

export const setUserInfo = (user: User) =>
  ({ type: SET_USER_INFO, payload: user });

type UserAction = ReturnType<typeof setUserInfo>

const initialState: User = {
  phone: '',
  ages: '',
  sex: '',
  check: false
}

const userInfo = (state: User = initialState, action: UserAction) => {
  switch (action.type) {
    case SET_USER_INFO:
      return action.payload
    default:
      return state;
  }
}

export default userInfo;