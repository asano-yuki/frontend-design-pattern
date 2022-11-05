interface Person {
  name: string
  age: number
  nationality: string
}

const person = {
  name: 'John Doe',
  age: 42,
  nationality: 'American'
}

const personProxy = new Proxy(person, {
  get: (obj, prop: keyof Person) => {
    console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`)
    return Reflect.get(obj, prop)
  },
  set: (obj, prop: keyof Person, value) => {
    if (prop === 'name') validateName(value)
    if (prop === 'age') validateAge(value)
    Reflect.set(obj, prop, value)
    console.log(`Changed ${prop} from ${obj[prop]}`)
    return true
  }
})

const validateName = (name: string) => {
  if (name === 'error') throw new Error(`Invalid name: ${name}`)
}

const validateAge = (age: number) => {
  if (age < 10) throw new Error(`Cannot be less than 10: ${age}`)
}

export { person, personProxy }