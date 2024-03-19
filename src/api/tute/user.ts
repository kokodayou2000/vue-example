import type { IAuth, ILoginInfo, IUserInfo } from '@/api/types/user';
import { usePost } from './base';

export const auth = ({ code, school }: ILoginInfo) => {
  // return localTestUsePost<IResponse, IResponse>('weixinUser/wxLogin', {
  return usePost<ILoginInfo, IAuth>('user/api/v1/weixinUser/wxLogin1', {
    code,
    school
  });
};

export const updateUserInfo = ({ id, nickname, avatarUrl }: IUserInfo) => {
  // return localTestUsePost<IResponse, IResponse>('weixinUser/updateUserInfo', {
  return usePost<IUserInfo, IAuth>('user/api/v1/weixinUser/updateUserInfo', {
    id,
    nickname,
    avatarUrl
  });
};
