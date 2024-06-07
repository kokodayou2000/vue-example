function addition(x: number, y: number): number {
  return x + y;
}

// 相当于把 第一个参数x都变成5了
const plus5 = addition.bind(null, 5);

plus5(10);
plus5(25);
