import Image from "../core/Image";

function CharacterImage ({src, className, onClick}) {
    return <Image onClick={onClick} src={src} className= {`object-cover h-[13vh] w-[13vh] rounded-full border-2 ${className}`} ></Image>
}

export default CharacterImage