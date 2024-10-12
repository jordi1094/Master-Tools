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

                    alert(error.message)
                })
        }catch (error) {
            toast.error(error.message)

            alert(error.message)
        }
    }


    return( 
        <View className='bg-[url(../../public/images/background.jpg)] bg-cover bg-center h-[100vh] flex items-center justify-center flex-col'>
        <FormWithFeedback onSubmit={handleRegisterSubmit} className='bg-gradient-to-b from-blueBackgroundBox p-3 h-[40vh] pt-0 rounded-lg flex flex-col items-center justify-between gap-y-3'>
            <Heading level={2}>Register</Heading>
            <Field id = 'name' placeholder= 'Name'>Name</Field>
            <Field id = 'surname' placeholder= 'Surname'>Surname</Field>
            <Field id = 'email' placeholder= 'Email'>Email</Field>
            <Field id = 'username' placeholder= 'Username'>Username</Field>
            <Select id= 'role' placeholder='Select your role' options={['Master', 'Player']}></Select>
            {/* //TODO change type password to text with the buton  */}
            <FieldPassword id= 'password' placeholder= 'Password'>Password</FieldPassword>
            <FieldPassword id= 'repeatPassword' placeholder= 'Repeat assword'>Reperat password</FieldPassword>
            <Button type = 'submit' className = 'text-white bg-[--blueBackgroundBox] rounded-md mt-4 hover:scale-y-105 active:scale-y-100 px-3 w-[100%]'> Register Now</Button>
        </FormWithFeedback>
        <Link to='/login'>Registered?</Link>

    </View>

    )

}

export default RegisterForm