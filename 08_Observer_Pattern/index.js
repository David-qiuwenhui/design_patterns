// Observer Pattern 观察者模式
// 通过观察者模式，我们可以将某些对象（观察者）订阅到另一个称为可观察对象的对象。每当事件发生时，可观察者都会通知其所有观察者！
class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(func) {
    this.observers.push(func);
  }

  unsubscribe(func) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}
