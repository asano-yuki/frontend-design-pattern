import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import DogsImage from './index'

describe('Presentation Test', () => {
  test('draw 3 images', async () => {
    const dogs = ['test1.png', 'test2.png', 'test3.png']
    render(<DogsImage dogs={dogs} />)
    await screen.findAllByRole('img')
    expect(screen.getAllByRole('img')).toHaveLength(3)
  })
})