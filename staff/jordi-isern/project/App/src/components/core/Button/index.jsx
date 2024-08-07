import './index.css'

function Button ({type , className, onClick, children}){
    return <button onClick={onClick} className={`Button hover:font-semibold ${className ? className:''}` } type={type}>{children}</button>
}

export default Button