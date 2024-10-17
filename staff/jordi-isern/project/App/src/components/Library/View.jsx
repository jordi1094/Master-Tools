function View({tag: Tag= 'div', className, children, direction = 'column', align = 'center'}) {
    return <Tag className={className}>{children}</Tag>
}

export default View