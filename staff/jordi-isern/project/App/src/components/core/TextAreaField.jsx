function TextAreaField ({id,className,classNameLabel,classNameInput, children, formHook}) {
    return (
    <div className={className}>
        <label htmlFor={id} className={classNameLabel}> {children}</label>
        <textarea id={id} placeholder='Write here!' autoComplete="off" autoCapitalize="sentences" className={classNameInput} {...formHook}></textarea>
    </div>
    )
}

export default TextAreaField