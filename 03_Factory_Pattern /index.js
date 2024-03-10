// Factory Pattern 工厂模式
// 使用工厂模式，我们可以使用工厂函数来创建新对象。当函数在不使用 new 关键字的情况下返回一个新对象时，它就是一个工厂函数！

// 假设我们的应用程序需要许多用户。我们可以使用 firstName 、 lastName 和 email 属性创建新用户
// 工厂函数还向新创建的对象添加一个 fullName 属性，该属性返回 firstName 和 lastName
const createUser = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  email,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
});

const user1 = createUser({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@doe.com',
});

const user2 = createUser({
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane@doe.com',
});

// 调用该 createUser 函数轻松创建多个用户
console.log(user1);
console.log(user2);

// 如果我们要创建相对复杂且可配置的对象，工厂模式会很有用。键和值的值可能取决于特定的环境或配置。使用工厂模式，我们可以轻松创建包含自定义键和值的新对象！
const createObjectFromArray = ([key, value]) => ({
  [key]: value,
});
const obj = createObjectFromArray(['name', 'John']); // { name: "John" }
console.log(obj);
