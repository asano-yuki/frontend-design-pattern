import useDogImage from '../hooks/useDogsImgae'
import DogsImage from '../presentation/index'

const DogImageContainer = () => {
  const { dogs } = useDogImage()
  return <DogsImage dogs={dogs} />
}

export default DogImageContainer