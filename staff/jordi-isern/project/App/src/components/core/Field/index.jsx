import Input from '../Input'
import Label from '../Label'

function Field({id, type, placeholder}) {
    return <div className='Field'>
        <Label htmlFor={id}></Label>
        <Input id={id} type={type} placeholder={placeholder}/>
    </div>
}

export default Field
