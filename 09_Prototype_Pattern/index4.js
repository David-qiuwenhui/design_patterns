// 类中我们可以使用 getter 和 setter 来获取和设置值，getter 和 setter 都需要在严格模式下执行
class Runoob {
  constructor(name) {
    this._sitename = name;
  }
  get sitename() {
    return this._sitename;
  }
  set sitename(x) {
    this._sitename = x;
  }
}

let noob = new Runoob('菜鸟教程');
console.log(noob.sitename);
noob.sitename = '菜鸟教程new';
console.log(noob.sitename);
