import { counter } from './index'

describe('Singleton Test', () => {
  test('increment 1 time should be 1', () => {
    counter.increment()
    expect(counter.getCount()).toBe(1)
  })

  test('increment 3 times should be 4', () => {
    counter.increment()
    counter.increment()
    counter.increment()
    expect(counter.getCount()).toBe(4)
  })

  test('decrement 1 time should be 3', () => {
    counter.decrement()
    expect(counter.getCount()).toBe(3)
  })
})
