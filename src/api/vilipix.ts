import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.vilipix.com',
  timeout: 10000
});

interface Resp<T> {
  code: number;
  data: T;
  message: string;
}

export interface IVilipixTable {
  count: number;
  rows: IVilipixRow[];
}
export interface IVilipixRow {
  comment_total: number;
  create_at: Date;
  height: number;
  width: number;
  like_total: number;
  original_url: string;
  picture_id: string;
  ranking: IVilipixRank;
  regular_url: string;
  tags: string;
  title: string;
  type: number;
}
export interface IVilipixRank {
  bussiness_id: string;
  created_at: Date;
  last_sort: number;
  ranking_date: string;
  sort: number;
  status: number;
  type: number;
  update_at: Date;
}
export const getImageList = (limit: number, offset: number, type: number) => {
  return instance.get<Resp<IVilipixTable[]>>(
    '/api/v1/picture/ranking?limit=' +
      limit +
      '&offset=' +
      offset +
      '&type=' +
      type
  );
};
