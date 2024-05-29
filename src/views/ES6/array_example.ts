const products = [
  { name: 'A', stock: 10 },
  { name: 'B', stock: 11 },
  { name: 'C', stock: 12 },
  { name: 'D', stock: 13 }
];

// 对面不更改
// 得到新数组，其中 A的stock-1

const newProducts = products.map(p => {
  return p.name === 'A' ? { name: p.name, stock: p.stock - 1 } : p;
});

// return p.name === 'A' ? { ...p, stock: p.stock - 1 } : p;

console.log(newProducts);
