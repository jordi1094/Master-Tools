import View from "../../../components/Library/View"
import CharacterImage from "../../../components/Library/CharacterImage"
import logic from "../../../logic"
import { useState, useEffect } from "react"

function NpcsBox({className, locationId}){
    const [npcsList, setNpcs] = useState([])

    useEffect(() => {
        logic.getNpcs(locationId)
        .then(npcs => setNpcs(npcs))
    },[])
    return (
        <View className={`${className} h-auto rounded-r-3xl bg-blueBackgroundBox w-[15vh] pl-2 py-5 flex flex-col gap-3 self-center` }>
            {npcsList.map((npc, index) => <CharacterImage  key={index} src={npc.image} className='border-black'/>)}
            <CharacterImage src={'/images/npc/Npc 1.jpg'} className='border-black' ></CharacterImage>
            <CharacterImage src={'/images/npc/Npc 2.jpg'} className='border-black'  ></CharacterImage>
            <CharacterImage src={'/images/npc/Npc draconido.jpeg'} className='border-black'></CharacterImage>
            <CharacterImage src={'/images/npc/Tabern owner.jpeg'} className='border-black'  ></CharacterImage>
        </View>
    )
}

export default NpcsBox