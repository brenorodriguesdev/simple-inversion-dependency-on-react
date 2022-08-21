import React from 'react'
import ReactDOM from 'react-dom/client'
import AppFactory from './factories/App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppFactory />
  </React.StrictMode>
)
