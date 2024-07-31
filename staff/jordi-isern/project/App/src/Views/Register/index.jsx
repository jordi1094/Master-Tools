import { useState } from 'react'
import View from '../../components/Library/View'
import Heading from '../../components/core/Heading'
import FormWithFeedback from '../../components/Library/FormWithFeedback'
import Field from '../../components/core/Field'
import FieldPassword from '../../components/core/FieldPassword'
import Button from '../../components/core/Button'
import Select from '../../components/core/Select'
import {Link, Navigate} from 'react-router-dom'

import './index.css'
import logic from '../../../Logic'


function Register () {
    console.log( 'Register -> render')

    const [message, setMessage] = useState('')

    const handleRegisterSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const surname = form.surname.value
        const email = form.email.value
        const username = form.username.value
        const role = form.role.value
        const password = form.password.value
        const passwordRepeat = form.repeatPassword.value

        try{
            logic.registerUser(name, surname, email, username, role, password, passwordRepeat)
                .then(() => {<Navigate to = '/login'/> })
                .catch(error => {
                    console.log(error)

                    setMessage(error.message)
                })
        }catch (error) {
            console.error(error)

            setMessage(error.message)
        }
    }


    return( 
        <View className={'Register'}>
        <FormWithFeedback onSubmit={handleRegisterSubmit}>
            <Heading level={2}>Register</Heading>
            <Field id = 'name' placeholder= 'Name'>Name</Field>
            <Field id = 'surname' placeholder= 'Surname'>Surname</Field>
            <Field id = 'email' placeholder= 'Email'>Email</Field>
            <Field id = 'username' placeholder= 'Username'>Username</Field>
            <Select id= 'role' placeholder='Select your role' options={['Master', 'Player']}></Select>
            {/* //TODO change type password to test with the buton  */}
            <FieldPassword id= 'password' placeholder= 'Password'>Password</FieldPassword>
            <FieldPassword id= 'repeatPassword' placeholder= 'Repeat assword'>Reperat password</FieldPassword>
            <Button type = 'submit' className = 'submitButton'> Register Now</Button>
        </FormWithFeedback>
        <Link to='/login'>Registered?</Link>

    </View>

    )

}

export default Register