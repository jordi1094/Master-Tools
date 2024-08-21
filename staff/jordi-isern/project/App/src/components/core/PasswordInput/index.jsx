import './index.css'
import Image from '../Image'
import Field from '../Field'
import eyeIcon from '../../../icons/eye.svg'


function PasswordInput ({id,placeholder, className}) {
    return <div className='flex gap-2'>
        <label htmlFor={id}>{placeholder}</label>
        <div className='flex h-6 bg-white rounded-md px-2'>
            <input className={`${className}`}id= {id}  type= 'password' placeholder={placeholder}></input>
            <Image src={eyeIcon}></Image>
        </div>
    </div>
}

export default PasswordInput