import CharactersBox from "./components/CharactersBox"
import NpcsBox from "./components/NpcsBox"
import EnemiesBox from "./components/EnemiesBox"
import View from "../../components/Library/View"

function Campain () {
    console.log('Campain -> render')


    return (
        <View className='bg-[url(../../public/images/background.jpg)] bg-cover h-[100vh] grid grid-flow-col  '>
            <NpcsBox ></NpcsBox>
            <CharactersBox ></CharactersBox>
            <EnemiesBox></EnemiesBox>
      
        </View>
        
    )
}

export default Campain