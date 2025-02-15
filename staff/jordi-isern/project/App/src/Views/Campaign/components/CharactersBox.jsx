import View from "../../../components/Library/View"
import CharacterImage from "../../../components/Library/CharacterImage"
import logic from "../../../logic"
import { useEffect, useState } from "react"
import {toast} from 'sonner'

function CharactersBox({campaignId, onClickCharacter}){
    const [charactersList, setCharacters] = useState([])

    useEffect(() => {
        logic.getCharacters(campaignId)
        .then(characters => setCharacters(characters))
        .catch(error => toast.error(error.message))
    },[])
    return (
        <View className='rounded-b-3xl bg-blueBackgroundBox h-[15vh] flex items-center gap-4 px-7'>
            {charactersList.map((character, index) => <CharacterImage key={index} onClick={()=>onClickCharacter(character.id)}  src={character.image} className='border-gold1' />)}
        </View>
    )
}

export default CharactersBox