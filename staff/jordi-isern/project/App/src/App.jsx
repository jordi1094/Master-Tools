import React from 'react'
import Home from './Views/Home'
import Register from './Views/Register'
import Login from './Views/Login'
import Campain from './Views/Campain'

import {Routes, Route} from 'react-router-dom'

import './App.css'

function App() {
  console.log('App -> virtual dom')

  return (<Routes>
    <Route path='/*' element= {<Home/>} />
    <Route path='/register' element = {<Register/>} />
    <Route path='/login' element = {<Login/>} />
    <Route path= '/campain' element= {<Campain/>}/>
  </Routes>)
}

export default App
