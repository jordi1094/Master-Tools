
import Label from '../Label'

function Field({id, type, placeholder, className, classNameLabel, classNameInput,formHook, children}) {

    return <div className={className}>
        <Label htmlFor={id} className= {classNameLabel}>{children}</Label>
        <input id={id} type={type} placeholder={placeholder} className={classNameInput} {...formHook} />
    </div>
}

export default Field
