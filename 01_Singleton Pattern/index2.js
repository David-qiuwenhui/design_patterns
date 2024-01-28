// 使用常规的对象写单例模式
let count = 0;

const counter = {
  increment() {
    return ++count;
  },
  decrement() {
    return --count;
  },
};

Object.freeze(counter);
export { counter };
