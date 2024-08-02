import View from "../../../components/Library/View"
import CharacterImage from "../../../components/Library/CharacterImage"

function CharactersBox(){
    return (
        <View className='rounded-b-3xl bg-blueBackgroundBox h-[15vh] justify-self-center pt-2 px-5 flex gap-2'>
            <CharacterImage src={'/images/jugadores/bardo humano.jpeg' } ></CharacterImage>
            <CharacterImage src={'/images/jugadores/draconido mago.jpeg' } ></CharacterImage>
            <CharacterImage src={'/images/jugadores/elfa guerrera.jpeg' } ></CharacterImage>
            <CharacterImage src={'/images/jugadores/enano guerreto.jpeg' } ></CharacterImage>
        </View>
    )
}

export default CharactersBox