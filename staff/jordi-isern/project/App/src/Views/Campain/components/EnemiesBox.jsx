import View from "../../../components/Library/View"
import CharacterImage from "../../../components/Library/CharacterImage"

function EnemiesBox(className){
    return (
        <View className={`${className} rounded-l-3xl bg-blueBackgroundBox w-[15vh] pl-2 py-5 flex-row gap-4 self-center justify-self-end`}>
            <CharacterImage src={'/images/enemigos/dragon de hielo.jpeg' } ></CharacterImage>
            <CharacterImage src={'/images/enemigos/goblin.jpeg' } ></CharacterImage>
            <CharacterImage src={'/images/enemigos/manticora.jpeg' } ></CharacterImage>
            <CharacterImage src={'/images/enemigos/orco.jpeg' } ></CharacterImage>
        </View>
    )
}

export default EnemiesBox