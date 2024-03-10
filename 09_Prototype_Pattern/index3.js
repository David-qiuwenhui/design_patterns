// Object.create 是一种简单的方法，通过指定新创建的对象的原型，让对象直接从其他对象继承属性。新对象可以通过沿着原型链向下访问新属性。
const dog = {
  bark() {
    console.log(`Woof!`);
  },
};

const pet1 = Object.create(dog);

pet1.bark(); // Woof!
console.log('Direct properties on pet1: ', Object.keys(pet1));
console.log("Properties on pet1's prototype: ", Object.keys(pet1.__proto__));
