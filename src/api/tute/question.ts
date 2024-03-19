import type {
  ICreateQuestion,
  ICreateQuestionBank,
  IQuestion,
  IQuestionBank,
  IUpdateItem
} from '@/api/types/question';
import { useDelete, useGet, usePost } from './base';

// 获取全部题库列表
export const fetchQuestionBankData = () => {
  return useGet<IQuestionBank[], IQuestionBank[]>(
    '/question/api/v1/questionBank/getAllBankList'
  );
};

// 根据题库id获取题目列表
export const fetchQuestionDataByBank = (bankId: string) => {
  return useGet<IQuestion[], IQuestion[]>(
    `/question/api/v1/question/getQuestionListByBankId/${bankId}`
  );
};

// 创建题库
export const fetchCreateQuestionBank = ({
  bankName,
  bankInfo
}: ICreateQuestionBank) => {
  return usePost('/question/api/v1/questionBank/createQuestionBank', {
    bankName,
    bankInfo
  });
};

// 上传题目
export const fetchCreateQuestion = (questionItem: ICreateQuestion) => {
  return usePost<ICreateQuestion>('/question/api/v1/question/uploadQuestion', {
    bankName: questionItem.bankName,
    bankId: questionItem.bankId,
    note: questionItem.note,
    answer: questionItem.answer,
    chapter: questionItem.chapter,
    mediaResources: questionItem.mediaResources,
    options: questionItem.options,
    qtype: questionItem.qtype,
    question: questionItem.question
  });
};

// 更新题库
export const updateQuestionBank = (bankId: string) => {
  return useGet<IUpdateItem, IUpdateItem>(
    `/question/api/v1/question/updateQuestionListByBankId/${bankId}`
  );
};

export const uploadQuestionList = () => {
  return useGet<IQuestion[], IQuestion[]>(
    `/question/api/v1/question/uploadQuestionList`
  );
};

export const fakeDeleteQuestionList = () => {
  return useGet<IQuestion[], IQuestion[]>(
    `/question/api/v1/question/fakeDeleteList`
  );
};

export const fakeDeleteQuestion = (id: string) => {
  return useDelete(`/question/api/v1/question/fakeDeleteQuestion/${id}`);
};

export const realDeleteQuestion = (id: string) => {
  return useGet(`/question/api/v1/question/fakeDeleteQuestion/${id}`);
};
export const passQuestion = (id: string) => {
  return usePost(`/question/api/v1/question/pass/${id}`);
};
