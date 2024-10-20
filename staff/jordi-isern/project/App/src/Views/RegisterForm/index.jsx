import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import View from "../../components/Library/View"
import FormWithFeedback from "../../components/Library/FormWithFeedback"
import Heading from "../../components/core/Heading"
import Field from "../../components/core/Field"
import FieldPassword from "../../components/core/FieldPassword"
import Button from "../../components/core/Button"
import Select from "../../components/core/Select"
import logic from '../../logic'
import {toast} from 'sonner'


function RegisterForm () {
    const navigate = useNavigate()

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
                .then(() => navigate('/login'))
                .catch(error => {
                    toast.error(error.message)
                })
        }catch (error) {
            toast.error(error.message)
        }
    }


    return( 
        <View className='bg-[url("/images/background.jpg")] bg-cover bg-center h-[100vh] flex items-center justify-center flex-col'>
        <FormWithFeedback onSubmit={handleRegisterSubmit} className='bg-gradient-to-b from-blueBackgroundBox p-3 h-[43vh] pt-0 rounded-lg flex flex-col items-center gap-y-7'>
            <Heading level={2}>Register</Heading>
            <Field id = 'name' placeholder= 'Name' className='flex gap-2 h-6 justify-between w-full' classNameInput='w-full rounded-md px-2 text-gold1'>Name </Field>
            <Field id = 'surname' placeholder= 'Surname' className='flex gap-2 h-6 justify-between w-full' classNameInput='w-full rounded-md px-2 text-gold1'>Surname</Field>
            <Field id = 'email' placeholder= 'Email'  className='flex gap-2 h-6 justify-between w-full' classNameInput='w-full rounded-md px-2 text-gold1'>Email</Field>
            <Field id = 'username' placeholder= 'Username'  className='flex gap-2 h-6 justify-between w-full' classNameInput='w-full rounded-md px-2 text-gold1'>Username</Field>
            <Select id= 'role' placeholder='Select your role' options={['Master', 'Player']} className='w-full'></Select>

            <FieldPassword id= 'password' placeholder= 'Password'className='flex gap-2 h-6 justify-between w-full' classNameInput='w-full rounded-md px-2 text-gold1'>Password</FieldPassword>
            <FieldPassword id= 'repeatPassword' placeholder= 'Repeat assword' className='flex gap-2 h-6 justify-between w-full' classNameInput='w-full rounded-md px-2 text-gold1'>Reperat password</FieldPassword>
            <Button type = 'submit' className = 'text-white bg-[--blueBackgroundBox] rounded-md mt-4 hover:scale-y-105 active:scale-y-100 px-3 w-[100%] justify-self-end'> Register Now</Button>
            <Link to='/login'>Registered?</Link>
        </FormWithFeedback>

    </View>

    )

}

export default RegisterForm