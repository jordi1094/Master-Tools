import Heading from "../core/Heading"

function DetailValue ({className, headingStyle, valueStyle, name, children}) {
    return <div className={className}>
        <Heading className={headingStyle}>{name}</Heading>
        <p className={valueStyle}>{children}</p>
    </div>
}

export default DetailValue