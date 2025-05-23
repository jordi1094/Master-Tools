import Label from "../core/Label"

function DoubleInput({id1,id2, type, placeholder1,placeholder2, className, classNameLabel, classNameInput, children, formHook1, formHook2}) {
    return <div className={className}>
        <Label htmlFor={id1} className= {classNameLabel}>{children}</Label>
        <Label htmlFor={id2}></Label>
        <div className="flex">
        <input id={id1} type={type} placeholder={placeholder1} className={`${classNameInput} border-[1px] border-slate-700`} {...formHook1} />
        <input id={id2} type={type} placeholder={placeholder2} className={`${classNameInput} border-[1px] border-slate-700`} {...formHook2}/>
        </div>
    </div>
}

export default DoubleInput