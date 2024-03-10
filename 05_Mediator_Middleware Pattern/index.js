// Mediator/Middleware Pattern 中介者/中间件模式
// 中间件模式通过让所有通信流经一个中心点，使我们很容易简化对象之间的多对多关系
class ChatRoom {
  logMessage(user, message) {
    const sender = user.getName();
    console.log(`${new Date().toLocaleString()} [${sender}]: ${message}`);
  }
}

class User {
  constructor(name, chatroom) {
    this.name = name;
    this.chatroom = chatroom;
  }

  getName() {
    return this.name;
  }

  send(message) {
    this.chatroom.logMessage(this, message);
  }
}

const chatroom = new ChatRoom();

const user1 = new User('John Doe', chatroom);
const user2 = new User('Jane Doe', chatroom);

user1.send('Hi there!');
user2.send('Hey!');
