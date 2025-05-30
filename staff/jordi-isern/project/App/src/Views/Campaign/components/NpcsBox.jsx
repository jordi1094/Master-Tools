import View from "../../../components/Library/View"
import CharacterImage from "../../../components/Library/CharacterImage"
import logic from "../../../logic"
import { useState, useEffect } from "react"
import {toast} from 'sonner'
import { set } from "react-hook-form"

function NpcsBox({className, locationId, onClickNpc}){
    const [npcsList, setNpcs] = useState([])

    useEffect(() => {
        setNpcs([])
        logic.getNpcs(locationId)
        .then(npcs => setNpcs(npcs))
        .catch(error => toast.error(error.message))
    },[locationId])
    return (
        <View className={`${className} h-auto rounded-r-3xl bg-blueBackgroundBox w-[15vh] pl-2 py-5 flex flex-col gap-3 self-center` }>
            {npcsList.map((npc, index) => <CharacterImage onClick={() => onClickNpc(npc.id)} key={index} src={npc.image} className='border-black'/>)}
        </View>
    )
}

export default NpcsBox