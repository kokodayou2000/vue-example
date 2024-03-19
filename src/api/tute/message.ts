import { useGet } from './base';
import { IMsg } from '@/api/types/message';

export const fetchMessage = (target: string) => {
  return useGet<IMsg, IMsg>(`/question/api/v1/question/message/${target}`);
};
