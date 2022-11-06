import React from 'react'
import ReactDOM from 'react-dom/client'
import Provider from './design/Provider'
import Presentation from './design/ContainerPresentation/container'
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Provider />
    <Presentation />
  </React.StrictMode>
)

