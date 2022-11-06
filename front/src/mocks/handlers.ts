import { rest } from 'msw'

export const handlers = [
  rest.get('https://dog.ceo/api/breed/labrador/images/random/6', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: ['test1.png', 'test2.png', 'test3.png'],
        status: '200'
      })
    )
  })
]