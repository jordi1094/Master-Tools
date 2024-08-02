import View from "../../../components/Library/View"
import CharacterImage from "../../../components/Library/CharacterImage"

function NpcsBox(className){
    return (
        <View className={`${className} h-auto rounded-r-3xl bg-blueBackgroundBox w-[15vh] pl-2 py-5 flex-row gap-4 self-center` }>
            <CharacterImage src={'/images/npc/Npc 1.jpg' } ></CharacterImage>
            <CharacterImage src={'/images/npc/Npc 2.jpg' } ></CharacterImage>
            <CharacterImage src={'/images/npc/Npc draconido.jpeg' } ></CharacterImage>
            <CharacterImage src={'/images/npc/Tabern owner.jpeg' } ></CharacterImage>
        </View>
    )
}

export default NpcsBox