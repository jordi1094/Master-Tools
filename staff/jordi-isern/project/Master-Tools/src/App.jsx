import { useState } from 'react'
import Home from './Views/Home'


import './App.css'

function App() {
  console.log('App -> virtual dom')

  const [view, setView] = useState('home')



  return (<>
  {view === 'home' && <Home></Home>}
  </>

  )
}

export default App
