import View from "../../../components/Library/View"
import CharacterImage from "../../../components/Library/CharacterImage"
import logic from "../../../logic"
import { useEffect, useState } from "react"
import {toast} from 'sonner'

function EnemiesBox({locationId, onClickEnemy}){
    const [enemiesList, setEnemies] = useState([])

    useEffect(() => {
        logic.getLocation(locationId)
        .then(location => {
            setEnemies([])
            const enemiesIndexList = location.enemies.sort()
            enemiesIndexList.reduce(async( previousPromise, enemyIndex) => {
                await previousPromise
                const enemy= await logic.getEnemy(enemyIndex)
                setEnemies(prevEnemies => [...prevEnemies, enemy])
            }, Promise.resolve())
        })
        .catch(error => toast.error(error.message))
    },[locationId])

    return (
        <View className={`rounded-l-3xl bg-blueBackgroundBox w-[15vh] pl-2 py-5 flex flex-col gap-3 self-center justify-self-end`}>
            {enemiesList.sort().map((enemy, index) =>{
                return <CharacterImage key={index} onClick={() => {onClickEnemy(`${enemy.index}_${index}`)}} src={enemy.image ? `https://www.dnd5eapi.co${enemy.image}` : 'https://us.123rf.com/450wm/arhimicrostok/arhimicrostok1705/arhimicrostok170504136/78019673-user-sign-icon-person-symbol-human-avatar-flat-style.jpg?ver=6'} className= 'border-red1' ></CharacterImage>
                })}
            </View>
    )
}

export default EnemiesBox