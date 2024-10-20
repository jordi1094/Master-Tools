import {useEffect, useState} from 'react'
import logic from '../../logic'
import Header from "../../components/Library/Header"
import View from "../../components/Library/View"
import HistoryButton from "../../components/Library/HistoryButton"
import { useNavigate } from 'react-router-dom'
import {toast} from 'sonner'

function Home () {
    const [campaigns, setCampaigns] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        loadCampaigns()
    },[campaigns])

    const loadCampaigns = () => {
        try{
            logic.getCampaigns()
            .then(campaigns => {
                setCampaigns(campaigns)
            }).catch(error => {
                toast.error(error.message)
            })
        }catch(error){
            toast.error(error.message)
        }
    }

    const onClickCampaign = (campaignId) => {
        navigate(`/campaign/${campaignId}`)
    }

    const onClickDelete = (campaignId) => {
        logic.deleteCampaign(campaignId)
        .then(loadCampaigns)
        .catch(error => {toast.error(error.message)})

    }

    return(<View>
        <Header></Header>
        <View className='bg-[url("/images/background.jpg")] bg-cover h-[95vh] pt-6 pl-8 grid grid-cols-5 gap-7 items-start'>
            {campaigns.map((campaign, index) => <HistoryButton onClick={() =>onClickCampaign(campaign.id)} onClickDelete={() => onClickDelete(campaign.id)} key={index} Title={campaign.title} src={campaign.image} />)}
        </View>
    </View>
    )
}

export default Home