import {useEffect, useState} from 'react'
import logic from '../../logic'
import Header from "../../components/Library/Header"
import View from "../../components/Library/View"
import HistoryButton from "../../components/Library/HistoryButton"





function Home () {
    const [campaigns, setCampaigns] = useState([])

    useEffect(() => {
        loadCampaigns()
    },[])

    const loadCampaigns = () => {
        try{
            logic.getCampaigns()
            .then(campaigns => {
                setCampaigns(campaigns)
            }).catch(error => {
                console.error(error)
            })
        }catch(error){
            console.error (error)
        }
    }

    return(<View>
        <Header></Header>
        <View className='bg-[url(../../public/images/background.jpg)] bg-cover h-[95vh] pt-6 pl-8 grid grid-cols-5 gap-7 items-start'>
            {campaigns.map((campaign, index) => <HistoryButton  key={index} Title={campaign.name} src={campaign.image} />)}
        </View>
    </View>
    )
}

export default Home