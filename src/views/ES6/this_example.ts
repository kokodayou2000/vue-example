const obj = {
  name: 'obj',
  sayHi1: () => {
    // 这个提交代码的时候会报错，浏览器环境 为空，node环境 undifined
    // console.log(this.name);
  },
  sayHi2() {
    console.log(this.name);
  },
  sayHi3() {
    (() => {
      console.log(this.name);
    })();
  }
};

// 箭头函数 里面是没有 this的，使用的是外部的this
// 实际指向的是 浏览器环境 window全局
obj.sayHi1();
//谁调用的谁就是this
obj.sayHi2();
// 普通函数内部包含this，就是看谁调用的谁就是this
obj.sayHi3();
