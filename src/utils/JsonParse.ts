// 针对于map类型进行json数据处理

// 数据序列化
export function replacer(_key, value) {
  if (value instanceof Map) {
    return {
      dataType: 'Map',
      value: Array.from(value.entries()) // or with spread: value: [...value]
    };
  } else {
    return value;
  }
}
// 数据反序列化
export function reviver(_key, value) {
  if (typeof value === 'object' && value !== null) {
    if (value.dataType === 'Map') return new Map(value.value);
  }
  return value;
}

// 数据反序列化
export function reviverJsonData(_key, value) {
  // eslint-disable-next-line no-console
  console.log(value);
  return value;
}
