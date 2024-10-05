import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter} from 'react-router-dom'
import {Toaster} from 'sonner'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App/>
    <Toaster closeButton richColors   toastOptions={{
    classNames: {
      title: 'text-red-400',
      description: 'text-black',
      border: 'red-600'
    },
  }}/>
  </BrowserRouter>
)
