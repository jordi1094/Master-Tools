import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import logic from '../../logic'
import CharactersBox from "./components/CharactersBox"
import NpcsBox from "./components/NpcsBox"
import EnemiesBox from "./components/EnemiesBox"
import View from "../../components/Library/View"
import CampaignMenu from "./components/CampainMenu"
import CampaignDetails from "./components/CampaignDetails"
import MissionDetails from "./components/MissionDetails"
import LocationDetails from "./components/LocationDetails"
import CheckList from "./components/CheckList"


function Campaign () {
    const {id} = useParams()
    const [campaignData, setCampaign] = useState()
    const [presentLocationId, setLocation] = useState()


    useEffect(() => {
        logic.getCampaign(id)
            .then(campaign => {
                setCampaign(campaign)
                setLocation(campaign.startLocation)
            })
            .catch(error => {
                console.error( error)
            })
    },[]) 

    const [panelsView, setPanelsView] = useState({
        campaign: false,
        mission: false,
        checkList: false,
        location: false,
    })

    const  onclickBook = () => setPanelsView({...panelsView,campaign:true})
    const onClickCloseDetails = () => setPanelsView({...panelsView,campaign:false})


    const  onClickPage = () => setPanelsView({...panelsView,mission:true})
    const onClickCloseMission = () => setPanelsView({...panelsView,mission:false}) 


    const  onClickCheckList = () => setPanelsView({...panelsView,checkList:true})
    const onClickCloseCheckList = () => setPanelsView({...panelsView,checkList:false})     

    const  onClickMap = () => setPanelsView({...panelsView,location:true})
    const onClickCloseLocation = () => setPanelsView({...panelsView,location:false})     

    return (
        <View className='bg-[url(../../public/images/background.jpg)] bg-cover bg-center h-[100vh] grid grid-flow-col  '>
            {presentLocationId && <NpcsBox locationId={presentLocationId} />}
            <View className='flex flex-col justify-between items-center'>
                <CharactersBox campaignId = {id}/>
                {panelsView.campaign && <CampaignDetails campaignData={campaignData} onClickClose = {onClickCloseDetails}/>}
                {panelsView.mission &&<MissionDetails onClickClose={onClickCloseMission}/>}
                {panelsView.checkList && <CheckList onClickClose={onClickCloseCheckList}/>}
                {panelsView.location && <LocationDetails locationId={presentLocationId} onClickClose={onClickCloseLocation}/>}
                <CampaignMenu onclickBook={onclickBook} onClickPage={onClickPage} onClickCheckList= {onClickCheckList} onClickMap={onClickMap}/>
            </View>
            <EnemiesBox ></EnemiesBox>
      
        </View>
        
    )
}

export default Campaign


