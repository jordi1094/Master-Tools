function View({tag: Tag= 'div', className, children, direction = 'column', align = 'center'}) {
    return <Tag className={`view ${className ? className : ''}`}>{children}</Tag>
}

export default View