let count = 0

const counter = {
  getCount() {
    return count
  },

  increment() {
    return ++count
  },

  decrement() {
    return --count
  }
}

Object.freeze(counter)
export { counter }

/* Using classes is an anti-pattern in anti-pattern */
// let instance: Counter
// let count = 0

// class Counter {
//   constructor() {
//     if (instance) throw new Error('You can only create one instance!')
//     // eslint-disable-next-line @typescript-eslint/no-this-alias
//     instance = this
//   }

//   getInstance() {
//     return this
//   }

//   getCount() {
//     return count
//   }

//   increment() {
//     return ++count
//   }

//   decrement() {
//     return --count
//   }
// }

// const singletonCounter = Object.freeze(new Counter())
// export default singletonCounter