import PasswordInput from '../PasswordInput'
import Label from '../Label'
import { Children } from 'react'

function Field({id, type, placeholder, Children}) {
    return <div className='Field'>
        <Label htmlFor={id}></Label>
        <PasswordInput id={id} type={type} placeholder={placeholder}/>
    </div>
}

export default Field