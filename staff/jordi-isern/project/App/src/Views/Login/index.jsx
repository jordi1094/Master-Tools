import View from '../../components/Library/View'
import Heading from '../../components/core/Heading'
import FormWithFeedback from '../../components/Library/FormWithFeedback'
import Field from '../../components/core/Field'
import FieldPassword from '../../components/core/FieldPassword'
import Button from '../../components/core/Button'
import {Link} from 'react-router-dom'

import logic from '../../../Logic'
import { useNavigate } from 'react-router-dom'



function Login (onUserloggedIn) {
    console.log( 'Login -> render')

    const navigate = useNavigate()

    const handleLoginSubmit = event => {
        event.preventDefault()
        
        

        const form = event.target
    
        const username = form.username.value
        const password = form.password.value
    
        try{
            logic.loginUser(username, password)
                .then(() => navigate('/'))
                .catch(error => {
                    console.log(error)

                    alert(error.setMessage)
                })
        }catch (error) {
            console.log(error)

            alert(error.setMessage)
        }
    }

    return( 
        <View className= 'bg-[url(../../public/images/background.jpg)] bg-cover bg-center h-[100vh] flex items-center justify-center flex-col'>
        <FormWithFeedback className= 'bg-gradient-to-b from-blueBackgroundBox p-3 pt-0 rounded-lg flex flex-col items-center gap-y-3' on onSubmit={handleLoginSubmit}>
            <Heading level={2}>Login</Heading>
            <Field id = 'username' placeholder= 'Username'>Username</Field>

            {/* //TODO change type password to test with the buton  */}
            <FieldPassword id= 'password' placeholder= 'Password'>Password</FieldPassword>
            <Button type = 'submit' className ='text-white bg-[--blueBackgroundBox] rounded-md mt-4 hover:scale-y-105 active:scale-y-100 px-3 w-[100%]'> Login Now</Button>
        </FormWithFeedback>
        <Link to= '/register'>Not registered?</Link>
        </View>
    )
}
export default Login
