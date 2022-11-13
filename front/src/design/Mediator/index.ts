namespace Mediator {
  export class ChatRoom {
    logMessage(user: User, message: string) {
      const sender = user.name
      console.log(`${new Date().toLocaleString()} [${sender}]: ${message}`)
    }
  }

  export class User {
    name: string
    chatroom: ChatRoom

    constructor(name: string, chatroom: ChatRoom) {
      this.name = name
      this.chatroom = chatroom
    }

    getName() {
      return this.name
    }

    send(message: string) {
      this.chatroom.logMessage(this, message)
    }
  }
}

const chatroom = new Mediator.ChatRoom()

const user1 = new Mediator.User('John Doe', chatroom)
const user2 = new Mediator.User('Jane Doe', chatroom)

user1.send('Hi there!')
user2.send('Hey!')
