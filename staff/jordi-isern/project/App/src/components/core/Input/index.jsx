import './index.css'

function Input ({id,type,placeholder, className}) {
    return <div className='InputContainer'>
        <input className={`Input ${className ? className: ''}`} id={id} type= {type} placeholder={placeholder}></input>
    </div>
}

export default Input