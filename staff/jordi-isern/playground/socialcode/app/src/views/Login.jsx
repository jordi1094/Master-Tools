import { useState } from 'react'
import logic from '../logic.js'
import Field from '../Components/Core/Field.jsx'
import SubmitButton from '../Components/Core/SubmitButton.jsx'
import FormWithFeedback from '../Components/Library/FormWithFeedback.jsx'
import Link from '../Components/Core/Link.jsx'
import Title from '../Components/Core/Title.jsx'
import View from '../Components/Library/View.jsx'

function Login ({onUserLoged, onClickRegister}){
    const handleLoginSubmit = event => {
        event.preventDefault()
      
        const form = event.target
        
        const username = form.username.value
        const password = form.password.value
      
          try{
            logic.loginUser(username, password, error =>{
              if (error) {
                console.log(error)
      
                alert(error.message)
      
                return
              }
      
              onUserLoged()
            })
          }catch (error) {
            console.log(error)
      
            alert(error.message)
          }
        }
      
        const handleRegisterClick = event => {
          event.preventDefault()
      
          onClickRegister()
        }

    return<View tag='main'>
        <Title>Login</Title>
        <FormWithFeedback onSubmit={handleLoginSubmit}>
            <Field id='username' placeholder='usernname'>Username</Field>
            <Field id='password' placeholder='Password' type='password'>Password</Field>
            <SubmitButton>Login</SubmitButton>
        </FormWithFeedback>
        <Link onClick={handleRegisterClick}>Register</Link>
    </View>
}

export default Login