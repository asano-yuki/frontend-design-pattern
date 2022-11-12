namespace Prototype {
  export class Dog {
    name: string

    constructor(name: string) {
      this.name = name
    }

    bark() {
      return 'Woof!'
    }
  }
}

const dog1 = new Prototype.Dog('Daisy')

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
Dog.prototype.play = () => console.log('Playing now!')
// @ts-ignore
dog1.play()
/* eslint-disable @typescript-eslint/ban-ts-comment */
