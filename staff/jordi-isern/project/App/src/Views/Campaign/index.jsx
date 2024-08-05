import CharactersBox from "./components/CharactersBox"
import NpcsBox from "./components/NpcsBox"
import EnemiesBox from "./components/EnemiesBox"
import View from "../../components/Library/View"
import CampaignMenu from "./components/CampainMenu"
import CampaignDetails from "./components/CampaignDetails"


function Campaign () {
    console.log('campaign -> render')


    return (
        <View className='bg-[url(../../public/images/background.jpg)] bg-cover h-[100vh] grid grid-flow-col  '>
            <NpcsBox ></NpcsBox>
            <View className='flex flex-col justify-between items-center'>
                <CharactersBox/>
                <CampaignDetails/>
                <CampaignMenu/>
            </View>
            <EnemiesBox></EnemiesBox>
      
        </View>
        
    )
}

export default Campaign