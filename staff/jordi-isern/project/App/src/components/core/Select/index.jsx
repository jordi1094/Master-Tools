import './index.css'


function Select({id, options}){
    return <select name = {id} >
        <option hidden selected>"Select an option"</option>
        {options.map(option => <option value={option}>{option}</option>)}
    </select>  
}

export default Select