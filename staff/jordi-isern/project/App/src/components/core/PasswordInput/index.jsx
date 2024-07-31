import './index.css'
import Image from '../Image'
import eyeIcon from '../../../icons/eye.svg'


function PasswordInput ({id,placeholder, className}) {
    return <div className='InputContainer'>
        <input className={`Form ${className ? className: ''}`}id= {id}  type= 'password' placeholder={placeholder}></input>
        <Image src={eyeIcon}></Image>
    </div>
}

export default PasswordInput