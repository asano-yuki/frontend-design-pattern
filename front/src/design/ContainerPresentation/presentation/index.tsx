interface DogsImage {
  dogs: string[]
}

const DogImage = ({ dogs }: DogsImage) => (
  <div>
    {dogs.map((dog, i) => <img src={dog} key={i} alt="Dog" />)}
  </div>
)

export default DogImage