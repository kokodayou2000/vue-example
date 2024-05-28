type formatArgType = string | (() => string);

function _pad(isPad: boolean): (t: number) => string {
  if (isPad) {
    return (t: number): string => {
      return (t + '').padStart(2, '0');
    };
  }
  return (t: number): string => t + '';
}

function getDateInfo(date: Date, pad: (t: number) => string) {
  const year = date.getFullYear();
  const yyyy = pad(year);
  const month = date.getMonth() + 1;
  const MM = pad(month);
  const day = date.getDate();
  const dd = pad(day);
  const hour = date.getHours();
  const HH = pad(hour);
  const minute = date.getMinutes();
  const mm = pad(minute);
  const second = date.getSeconds();
  const ss = pad(second);
  const millisecond = date.getMilliseconds();
  const ms = pad(millisecond);
  return {
    year,
    month,
    day,
    hour,
    minute,
    second,
    millisecond,
    yyyy,
    MM,
    dd,
    HH,
    mm,
    ss,
    ms
  };
}
/**
 * 参数归一化
 * 让字符串变成函数结构来返回
 * @param formatter
 */
function _formatNormalize(formatter: formatArgType): (arg) => string {
  if (typeof formatter === 'function') {
    return formatter;
  }
  if (typeof formatter === 'string') {
    if (formatter === 'datetime') {
      formatter = 'YYYY-MM-dd HH:mm:ss';
    }
    if (formatter === 'date') {
      formatter = 'YYYY-MM-dd';
    }
    return dateInfo => {
      const { yyyy, MM, dd, HH, mm, ss } = dateInfo;
      return (formatter as string)
        .replace(/yyyy/g, yyyy)
        .replace(/MM/g, MM)
        .replace(/dd/g, dd)
        .replace(/HH/g, HH)
        .replace(/mm/g, mm)
        .replace(/ss/g, ss);
    };
  }
  throw new Error('非法参数，只支持 字符串或者函数');
}

/**
 * 格式化日期
 * 参数归一化
 * 找到情况最复杂的使用，并实现
 * @param date 日期对象
 * @param formatter
 * @param isPad
 */
function formate(date, formatter, isPad = false) {
  formatter = _formatNormalize(formatter);
  const pad = _pad(isPad);
  const dateInfo = getDateInfo(date, pad);
  return formatter(dateInfo);
}

formate(new Date(), 'date');

formate(new Date(), 'datetime');

formate(new Date(), 'date', true);

formate(new Date(), 'yyyy年MM月dd日 HH:mm:ss.ms', true);

formate(new Date('2012/1/1'), dateInfo => {
  const { year } = dateInfo;
  const thisYear = new Date().getFullYear();
  if (year < thisYear) {
    return `${thisYear - year}年前`;
  } else if (year > thisYear) {
    return `${thisYear - year}年后`;
  } else {
    return '今年';
  }
});
