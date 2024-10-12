import Heading from "../core/Heading"

function DetailDoubleValue ({className, headingStyle, valueStyle, name, value1, value2}) {
    return <div className={className}>
        <Heading className={headingStyle}>{name}</Heading>
        <div className="flex space-x-2 justify-center ">
        <p className={`${valueStyle} border-r-2 border-black/50 px-2`}>{value1}</p>
        <p className={valueStyle}>{value2}</p>
        </div>
    </div>
}

export default DetailDoubleValue