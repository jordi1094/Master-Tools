import View from "../../../components/Library/View"
import CharacterImage from "../../../components/Library/CharacterImage"

function NpcsBox(className){
    return (
        <View className={`${className} h-auto rounded-r-3xl bg-blueBackgroundBox w-[15vh] pl-2 py-5 flex flex-col gap-3 self-center` }>
            <CharacterImage src={'/images/npc/Npc 1.jpg'} className='border-black' ></CharacterImage>
            <CharacterImage src={'/images/npc/Npc 2.jpg'} className='border-black'  ></CharacterImage>
            <CharacterImage src={'/images/npc/Npc draconido.jpeg'} className='border-black'></CharacterImage>
            <CharacterImage src={'/images/npc/Tabern owner.jpeg'} className='border-black'  ></CharacterImage>
        </View>
    )
}

export default NpcsBox