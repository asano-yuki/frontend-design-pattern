import { renderHook, act } from '@testing-library/react-hooks'
import useDogsImgae from './useDogsImgae'

describe('Hooks(Container) Test', () => {
  test('get 3 dog images from fetch', async () => {
    await act(async () => {
      const { result, waitForNextUpdate } = renderHook(useDogsImgae)
      await waitForNextUpdate()
      expect(result.current.dogs.length).toBe(3)
    })
  })
})