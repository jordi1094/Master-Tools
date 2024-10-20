import React, { useEffect, useState } from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import Home from './Views/Home'
import RegisterForm from './Views/RegisterForm'
import Login from './Views/Login'
import Campaign from './Views/Campaign'
import CreateCampaign from './Views/CreateCampaign'
import CreateCharacter from './Views/CreateCharacter'
import LocationForm from './Views/CreateCampaign/components/LocationForm'
import logic from './logic'
import './App.css'



function App() {

  const [state, setState] = useState('')

  const onUserLogedIn = () =>{
    setState('loggin done')
  }

  useEffect(() => {
    document.title = 'Master Tools'
  })

  return (
      <Routes>
        <Route path='/register' element={logic.isUserLoggedIn() ? <Navigate to='/home' /> : <RegisterForm />} />
        <Route path='/login' element={logic.isUserLoggedIn() ? <Navigate to='/home' /> : <Login onUserLogedIn={onUserLogedIn}/>} />
        <Route path='/campaign/:id' element={logic.isUserLoggedIn() ? <Campaign /> : <Navigate to='/login' />} />
        <Route path='/createLocation/:locationId' element={<LocationForm/>}/>
        <Route path='/createCampaign/:id' element={logic.isUserLoggedIn() ? <CreateCampaign /> : <Navigate to='/login' />} />
        <Route path='/createCampaign/:id/location/:locationId' element= {logic.isUserLoggedIn() ? <LocationForm/> : <Navigate to='/login'/>}/>
        <Route path='/home' element={logic.isUserLoggedIn() ? <Home /> : <Navigate to='/login' />} />
      </Routes>

  )  
}

export default App
