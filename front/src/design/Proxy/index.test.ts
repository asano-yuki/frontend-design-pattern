import { person, personProxy } from './index'

describe('Proxy Test', () => {
  test('get name from proxy object', () => {
    expect(personProxy.name).toBe('John Doe')
  })

  test('set name from proxy object', () => {
    expect(() => {
      personProxy.name = 'success'
    }).not.toThrow()
  })

  test('validation check for name property', () => {
    expect(() => {
      personProxy.name = 'error'
    }).toThrow()
  })

  test('validation check for age property', () => {
    expect(() => {
      personProxy.age = 8
    }).toThrow()
  })
})