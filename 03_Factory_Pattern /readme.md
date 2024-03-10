## 工厂模式的Pros 优点
当我们必须创建多个共享相同属性的较小对象时，工厂模式非常有用。工厂函数可以根据当前环境或用户特定的配置轻松返回自定义对象。

## 工厂模式的Cons 缺点
在 JavaScript 中，工厂模式只不过是一个不使用 new 关键字返回对象的函数。ES6 箭头函数允许我们创建每次隐式返回一个对象的小型工厂函数。

但是，在许多情况下，每次创建新实例而不是新对象可能更节省内存。
```js
class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user1 = new User({
  firstName: "John",
  lastName: "Doe",
  email: "john@doe.com",
});

const user2 = new User({
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@doe.com",
});
```




