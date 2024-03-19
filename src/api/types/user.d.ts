export interface ILoginInfo {
  // 传入 code 即可登录了
  code: string;
  school: string;
}

export interface IUserInfo {
  // 用户id
  id: string;
  // 昵称
  nickname: string;
  // 头像
  avatarUrl: string;
}

export interface IAuth {
  userInfo: IUserInfo;
  token: string;
}
