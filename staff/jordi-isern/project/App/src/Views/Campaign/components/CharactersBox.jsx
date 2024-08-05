import View from "../../../components/Library/View"
import CharacterImage from "../../../components/Library/CharacterImage"

function CharactersBox(){
    return (
        <View className='rounded-b-3xl bg-blueBackgroundBox h-[15vh] flex items-center gap-4 px-7'>
            <CharacterImage src={'/images/jugadores/bardo humano.jpeg'} className= 'border-gold1'></CharacterImage>
            <CharacterImage src={'/images/jugadores/draconido mago.jpeg' } className= 'border-gold1' ></CharacterImage>
            <CharacterImage src={'/images/jugadores/elfa guerrera.jpeg' } className= 'border-gold1' ></CharacterImage>
            <CharacterImage src={'/images/jugadores/enano guerreto.jpeg' } className= 'border-gold1' ></CharacterImage>
        </View>
    )
}

export default CharactersBox