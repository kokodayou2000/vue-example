export interface IQuestion {
  // 唯一表示
  id: string;
  // 所属题库名称
  bankName: string;
  // 所属题库名称
  bankId: string;
  // 解析
  analysis: string;
  // 回答
  answer: string;
  // 章节
  chapter: string;
  // 媒体资源
  mediaResources: string;
  // 笔记
  note: string;
  // 选项
  options: IKeyValue[];
  // 类型
  qtype: string;
  // 问题
  question: string;
  // 状态
  status: string;
  // 更新时间
  updatedAt: Date;
  // 创建时间
  createdAt: Date;
  // 创建用户 id
  createdBy: string;
  // 创建者的名称
  createdUserName: string;
  // 是否已经完成
  isFinished: boolean;
  // 是否正确
  isCorrect: boolean;
  // 是否收藏
  isCollect: boolean;
  // 用户已经选择的结果
  selected: IKeyIndex[];
}
export interface IKeyIndex {
  index: number;
  key: string;
  color: string;
}

export interface IQuestionBank {
  id: string;
  // 题库名称
  bankName: string;
  // 题库信息
  bankInfo: string;
  // 题库题目数量
  count: number;
  // 创建者id
  createdBy: string;
  // 创建者姓名
  createdUserName: string;
  // 最后更新时间
  lastUpdateTime: Date;
  // 状态
  status: string;
  // 是否需要更新
  needUpdate: boolean;
}

export interface IKeyValue {
  key: string;
  value: string;
}

export interface ICreateQuestionBank {
  bankName: string;
  bankInfo: string;
}

export interface ICreateQuestion {
  bankName: string;
  bankId: string;
  question: string;
  note: string;
  answer: string;
  chapter: string;
  mediaResources: string;
  options: IKeyValue[];
  qtype: string;
}

export interface IUpdateItem {
  newBankInfo: IQuestionBank;
}
