import './index.css'

function Button ({type , className, onClick, children}){
    return <button onClick={onClick} className={`Button text-gold1 hover:font-semibold ${className ? className:''}` } type={type}>{children}</button>
}

export default Button