export const TypeMap = new Map<string, string>([
  ['1', '单选题'],
  ['2', '多选题'],
  ['3', '判断题'],
  ['4', '填空题'],
  ['5', '简答题']
]);

export const TypeReverseMap = new Map<string, string>([
  ['单选题', '1'],
  ['多选题', '2'],
  ['判断题', '3'],
  ['填空题', '4'],
  ['简答题', '5']
]);

export const isOptionType = (type: string) => {
  return type === '1' || type === '2' || type === '3';
};

export const isAnswerType = (type: string) => {
  return type === '5' || type === '4';
};
