import View from "../../../components/Library/View"
import CharacterImage from "../../../components/Library/CharacterImage"
import { useEffect, useState } from "react"

function EnemiesBox(className, enemiesIndexList){
    const [enemiesList, setEnemies] = useState([])

    return (
        <View className={`${className} rounded-l-3xl bg-blueBackgroundBox w-[15vh] pl-2 py-5 flex flex-col gap-3 self-center justify-self-end`}>
            <CharacterImage src={'/images/enemigos/dragon de hielo.jpeg' } className= 'border-red1' ></CharacterImage>
            <CharacterImage src={'/images/enemigos/goblin.jpeg' }className= 'border-red1' ></CharacterImage>
            <CharacterImage src={'/images/enemigos/manticora.jpeg' } className= 'border-red1' ></CharacterImage>
            <CharacterImage src={'/images/enemigos/orco.jpeg' } className= 'border-red1' ></CharacterImage>
        </View>
    )
}

export default EnemiesBox