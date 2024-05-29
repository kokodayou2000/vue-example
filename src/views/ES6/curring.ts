function currying(fn, ...args) {
  return function (...rest) {
    const allArgs = [...args, ...rest];
    if (allArgs.length >= fn.length) {
      return fn.apply(this, allArgs);
    } else {
      return currying(fn, ...allArgs);
    }
  };
}

const sum = (a, b, c, d) => a + b + c + d;

console.log(currying(sum)(1)(2)(3)(4));
console.log(currying(sum, 1)(2)(3)(4));
console.log(currying(sum, 1, 2)(3)(4));
console.log(currying(sum, 1, 2)(3, 4));
