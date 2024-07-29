import React from 'react'
import Home from './Views/Home'
import Register from './Views/Register'
import Login from './Views/Login'

import {Routes, Route, useNavigate, Navigate} from 'react-router-dom'

import './App.css'

function App() {
  console.log('App -> virtual dom')

  return (<Routes>
    <Route path='/*' element= {<Home/>} />
    <Route path='/register' element = {<Register/>} />
    <Route path='/login' element = {<Login/>} />
  </Routes>)
}

export default App
