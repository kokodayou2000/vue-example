/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-this-alias */
// Slightly simplified version of http://stackoverflow.com/a/27078401/815507

export function lodash_throttle(
  fn: (...args: any[]) => any,
  wait = 250
): (this: any, ...args: any[]) => any {
  // 初始化变量
  let previous = 0; // 上次执行的时间戳
  // 日期id
  let timeout: number | null = null;
  // 函数执行结果
  let result: any;
  // 函数执行上下文
  let storedContext: any;
  // 函数的参数
  let storedArgs: any[];

  // 延迟执行函数
  const later = (): void => {
    previous = Date.now();
    timeout = null;
    // 执行传入的函数
    result = fn.apply(storedContext, storedArgs);
    // 如果没有定时器，处置上下文和参数
    if (!timeout) {
      storedContext = null;
      storedArgs = [];
    }
  };
  return function wrapper(this: any, ...args: any[]): any {
    const now = Date.now();
    const remaining = wait - (now - previous);

    storedContext = this;
    storedArgs = args;
    // 是否达到执行完成条件
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }

      previous = now;
      result = fn.apply(storedContext, storedArgs);

      if (!timeout) {
        storedContext = null;
        storedArgs = [];
      }
    } else if (!timeout) {
      // 如果还有剩余时间，并且没有设定定时器就设定新的定时器
      timeout = window.setTimeout(later, remaining);
    }
    // 函数执行结果
    return result;
  };
}
