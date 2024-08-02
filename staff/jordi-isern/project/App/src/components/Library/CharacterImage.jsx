import Image from "../core/Image";

function CharacterImage ({src}) {

    return <Image src={src} className= 'object-cover h-[13vh] w-[13vh] rounded-full border-2 border-gold1'></Image>
}

export default CharacterImage