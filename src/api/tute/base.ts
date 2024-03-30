import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios';
import axios from 'axios';
export const instance = axios.create({
  baseURL: 'https://kokodayou.top',
  // baseURL: 'http://127.0.0.1:9030/api/v1',
  timeout: 10000
});

const requestHandler = async (
  config: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> => {
  // 新增缓存
  // const token = useAuthorization()
  // if (token.value) {
  //   config.headers.set(STORAGE_AUTHORIZE_KEY, token.value)
  // }
  // return config
  // eslint-disable-next-line no-console
  // const token = localStorage.getItem('school-token');
  // if (config.headers && token) {
  config.headers['x-token'] =
    'p-projecteyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJub3JtYWwiLCJpZCI6IjE3NTc2NjUzNDE3MDQ3NjEzNDYiLCJhdmF0YXJVcmwiOiIiLCJuaWNrbmFtZSI6IndlYiBkZWZhdWx0IG5hbWUiLCJpYXQiOjE3MDc5NjUxNjUsImV4cCI6MTcxODMzMzE2NX0.Uaq6hDxDPC8zuyk2Y-XTEriD1Csn6iHW3e4cGBCvyrM';
  // }
  return config;
};

export interface ResponseBody<T = any> {
  code: number;
  data?: T;
  msg: string;
}

const responseHandler = (
  response: any
): ResponseBody<any> | AxiosResponse<any> | Promise<any> | any => {
  return response.data;
};

const errorHandler = (error: AxiosError): Promise<any> => {
  return Promise.reject(error);
};

instance.interceptors.request.use(requestHandler, errorHandler);

instance.interceptors.response.use(responseHandler, errorHandler);

export const useGet = <T = any, R = any>(
  url: string,
  params?: T,
  config?: AxiosRequestConfig
): Promise<ResponseBody<R>> => {
  return instance.request({
    url,
    params,
    method: 'GET',
    ...config
  });
};

export const usePost = <T = any, R = any>(
  url: string,
  data?: T,
  config?: AxiosRequestConfig
): Promise<ResponseBody<R>> => {
  return instance.request({
    url,
    data,
    method: 'POST',
    ...config
  });
};

export const usePut = <T = any, R = any>(
  url: string,
  data?: T,
  config?: AxiosRequestConfig
): Promise<ResponseBody<R>> => {
  return instance.request({
    url,
    data,
    method: 'PUT',
    ...config
  });
};

export const useDelete = <T = any, R = any>(
  url: string,
  data?: T,
  config?: AxiosRequestConfig
): Promise<ResponseBody<R>> => {
  return instance.request({
    url,
    data,
    method: 'DELETE',
    ...config
  });
};
