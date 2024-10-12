import Image from '../Image'
import Field from '../Field'
import eyeIcon from '../../../icons/eye.svg'
import { useState } from 'react'


function PasswordInput ({id,placeholder, className}) {
    const [type, setType] = useState('password')
    
    const onclickIcon = () =>{
        if(type === 'password'){
        setType('text')}
        if(type === 'text'){
            setType('password')
        }
        
    }

    return <div className={className}>
        <label htmlFor={id}>{placeholder}</label>
        <div className='flex h-6 bg-white rounded-md px-2'>
            <input className={`${className}`}id= {id}  type={type} placeholder={placeholder}></input>
            <Image src={eyeIcon}onClick={onclickIcon}></Image>
        </div>
    </div>
}

export default PasswordInput