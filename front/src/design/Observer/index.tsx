import { Button, FormControlLabel, Switch } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import observable from './observable'

function logger(data: string) {
  console.log(`${Date.now()} ${data}`)
}

function toastify(data: string) {
  toast(data, {
    position: toast.POSITION.BOTTOM_RIGHT,
    closeButton: false,
    autoClose: 2000
  })
}

observable.subscribe(logger)
observable.subscribe(toastify)

const App = () => {
  const handleClick = () => {
    observable.notify('User clicked button!')
  }

  const handleToggle = () => {
    observable.notify('User toggled switch!')
  }

  return (
    <div className="App">
      <Button variant="contained" onClick={handleClick}>Click me!</Button>
      <FormControlLabel label="Toggle me!" control={<Switch name="" onChange={handleToggle} />} />
      <ToastContainer />
    </div>
  )
}

export default App