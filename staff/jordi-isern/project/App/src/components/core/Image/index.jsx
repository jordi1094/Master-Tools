function Image ({ src, className, onClick}) {
    return <img  onClick={onClick} className={`Image ${className ? className: ''}`} src={src}></img>
}

export default Image