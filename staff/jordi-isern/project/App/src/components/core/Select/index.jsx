import './index.css'


function Select({id, options, className, placeholder}){
    return <select name = {id} className={className} >
        <option hidden selected>{placeholder}</option>
        {options.map((option, index) => <option key={index} value={option}>{option}</option>)}
    </select>  
}

export default Select