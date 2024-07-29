import View from '../../components/Library/View'
import Heading from '../../components/core/Heading'
import FormWithFeedback from '../../components/Library/FormWithFeedback'
import Field from '../../components/core/Field'
import FieldPassword from '../../components/core/FieldPassword'
import Button from '../../components/core/Button'
import {Link} from 'react-router-dom'
import './index.css'


function Login () {
    console.log( 'Login -> render')

    return( 
        <View className={'Login'}>
        <FormWithFeedback>
            <Heading level={2}>Login</Heading>
            <Field id = 'username' placeholder= 'Username'>Username</Field>

            {/* //TODO change type password to test with the buton  */}
            <FieldPassword id= 'password' placeholder= 'Password'>Password</FieldPassword>
            <Button type = 'submit' className = 'submitButton'> Login Now</Button>
        </FormWithFeedback>
        <Link to= '/register'>Not registered?</Link>
        </View>
    )
}
export default Login
