import { useState, useEffect } from 'react'

interface FetchDogsResponse {
  message: string[]
  status: string
}

const useDogsImgae = () => {
  const [dogs, setDogs] = useState<string[]>([])

  useEffect(() => {
    (async () => {
      const res = await fetch('https://dog.ceo/api/breed/labrador/images/random/6')
      const { message } = await res.json() as FetchDogsResponse
      setDogs(message)
    })()
  }, [])

  return { dogs }
}

export default useDogsImgae