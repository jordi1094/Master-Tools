
import Label from '../Label'

function Field({id, type, placeholder, className, classNameLabel, classNameInput,autoComplete,formHook, children}) {

    return <div className={className}>
        <Label htmlFor={id} className= {classNameLabel}>{children}</Label>
        <input id={id} type={type} autoComplete={autoComplete} placeholder={placeholder} className={classNameInput} {...formHook} />
    </div>
}

export default Field
