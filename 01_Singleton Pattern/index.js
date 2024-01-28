// 单例设计模式
// https://www.bilibili.com/video/BV1ve4y1j7NH/?spm_id_from=333.999.0.0&vd_source=62d0c1f767d359ea5365476c408c63a5
// https://www.patterns.dev/vanilla/singleton-pattern
let instance;
let counter = 0;

class Counter {
    constructor() {
        if (instance) {
            throw new Error('You can only create one instance!');
        }
        instance = this;
    }

    getInstance() {
        return this;
    }

    getCount() {
        return counter;
    }

    increment() {
        return ++counter;
    }

    decrement() {
        return --counter;
    }
}

const counter1 = new Counter();
const counter2 = new Counter();
// Error: You can only create one instance!

// 保证实例和变量方案只读 不可被外部改变
// const singletonCounter = Object.freeze(new Counter());
// export default singletonCounter;
