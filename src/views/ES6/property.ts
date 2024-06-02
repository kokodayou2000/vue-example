/*
有单价和总数，创建一个统计总价格的变量
totalPrice = unitPrice * chooseNumber
totalPrice会随着 unitPrice or chooseNumber 的变化而变化
 */

// ES5
function Product5(productName, unitPrice, chooseNumber) {
  this.productName = productName;
  this.unitPrice = unitPrice;
  this.chooseNumber = chooseNumber;
  // 需要一个记录总价的变量 unitPrice * chooseNumber
}
// 通过这种方式创建的 totalPrice
Object.defineProperty(Product5.prototype, 'totalPrice', {
  get: function () {
    return this.unitPrice * this.chooseNumber;
  }
});
const p5 = new Product5('iphone', 1000, 10);
console.log(p5.totalPrice);
p5.chooseNumber++;
console.log(p5.totalPrice);

// ES6

// app.ts
class Product6 {
  public productName: string;
  public unitPrice: number;
  public chooseNumber: number;

  constructor(productName: string, unitPrice: number, chooseNumber: number) {
    this.productName = productName;
    this.unitPrice = unitPrice;
    this.chooseNumber = chooseNumber;
  }

  get totalPrice() {
    return this.unitPrice * this.chooseNumber;
  }
}

// 主要逻辑
const product = new Product6('Laptop', 1000, 2);
console.log(product.productName); // 应输出 'Laptop'
console.log(product.totalPrice);
