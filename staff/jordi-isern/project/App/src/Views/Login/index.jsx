import View from '../../components/Library/View'
import Heading from '../../components/core/Heading'
import FormWithFeedback from '../../components/Library/FormWithFeedback'
import Field from '../../components/core/Field'
import FieldPassword from '../../components/core/FieldPassword'
import Button from '../../components/core/Button'
import {Link} from 'react-router-dom'
import logic from '../../logic'
import {toast} from 'sonner'



function Login ({onUserLogedIn}) {


    const handleLoginSubmit = event => {
        event.preventDefault()

        const form = event.target
    
        const username = form.username.value
        const password = form.password.value
    
        try{
            logic.loginUser(username, password)
                .then(() => {
                    onUserLogedIn()
            })
                .catch(error => {
                    alert(error.setMessage)
                })
        }catch (error) {
            toast.error(error.message)
        }
    }

    return( 
        <View className='bg-[url(../../public/images/background.jpg)] bg-cover bg-center h-[100vh] flex items-center justify-center flex-col'>
        <FormWithFeedback className= 'bg-gradient-to-b from-blueBackgroundBox p-3 pt-0 rounded-lg flex flex-col items-center gap-y-3' onSubmit={handleLoginSubmit}>
            <Heading level={2}>Login</Heading>
            <Field id = 'username' placeholder= 'Username' className='flex gap-2 h-6 justify-between w-full' classNameInput='w-full rounded-md px-2 text-gold1'>Username</Field>
            <FieldPassword id= 'password' placeholder= 'Password' className='flex gap-2 h-6 justify-between w-full' classNameInput='w-full rounded-md px-2 text-gold1'>Password</FieldPassword>
            <Button type = 'submit' className ='text-white bg-[--blueBackgroundBox] rounded-md mt-4 hover:scale-y-105 active:scale-y-100 px-3 w-[100%]'> Login Now</Button>
        </FormWithFeedback>
        <Link to= '/register'>Not registered?</Link>
        </View>
    )
}
export default Login
