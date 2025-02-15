function Form ({className, onSubmit, children}){
    return <form className={`Form ${className}`} onSubmit={onSubmit}>{children}</form>
}

export default Form