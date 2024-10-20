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
import CharacterDetails from "./components/CharacterDetails"
import NpcDetails from "./components/NpcDetails"
import EnemyDetails from "./components/EnemyDetails"
import CheckList from "./components/CheckList"
import {toast} from "sonner"


function Campaign () {
    const {id} = useParams()
    const [campaignData, setCampaign] = useState()
    const [presentLocationId, setLocation] = useState()
    const [characters, setCharacters] = useState([])
    const [enemies, setEnemies] = useState([])
    const [npcs, setNpcs] = useState([])
    const [currentMission , setMission] = useState()



    
    const [panelsView, setPanelsView] = useState({
        campaign: false,
        mission: false,
        checkList: false,
        location: false
    })
    
    useEffect(() => {
        logic.getCampaign(id)
            .then(campaign => {
                setCampaign(campaign)
                setLocation(campaign.startLocation)
                logic.getCharacters(id)
                .then(charactersRecived => {
                    setCharacters(charactersRecived)
                })
                .catch(error => toast.error(error.message))

                logic.getLocation(campaign.startLocation)
                    .then(location => {
                        setEnemies(location.enemies)
                        logic.getNpcs(campaign.startLocation)
                        .then(npcsRecived => {
                            setNpcs(npcsRecived)
                            const characterPanels = characters.reduce((acc, character) => {
                                acc[`${character.id}`] = false
                                return acc
                            },[])
                            const npcsPanels = npcs.reduce((acc, npc) => {
                                acc[`${npc.id}`] = false
                                return acc
                            },[])
                            
                            const enemiesPanels = enemies.reduce((acc, enemy, index) => {
                                acc[`${enemy}_${index}`] = false
                                return acc
                            },[])

                            setPanelsView(pervState => ({
                                ...pervState, ...characterPanels, ...enemiesPanels, ...npcsPanels
                            }))
                        })
                        .catch(error => toast.error(error.message)) 
            
                    })
                    .catch(error=> toast.error(error.message))
            })
            .catch(error => {
                toast.error(error.message)
            })
    },[])

    const onClickCharacter = (characterId) => {
        setPanelsView({... panelsView, [`${characterId}`]: true})
    }
    const onCloseCharacter = (characterId) => setPanelsView({...panelsView, [`${characterId}`]:false})

    const onClickNpc = (npcId) => {
        setPanelsView({...panelsView, [`${npcId}`]: true})
    }
    const onCloseNpc = (npcId) => setPanelsView({...panelsView,[`${npcId}`]:false})

    const onClickEnemy = (enemyIndex) => {
        setPanelsView({...panelsView, [`${enemyIndex}`]: true})
    }
    const onCloseEnemy = (enemyIndex) => setPanelsView({...panelsView,[`${enemyIndex}`]:false})

    const  onclickBook = () => setPanelsView({...panelsView,campaign:true})
    const onClickCloseDetails = () => setPanelsView({...panelsView,campaign:false})


    const  onClickPage = () => setPanelsView({...panelsView,mission:true})
    const onClickCloseMission = () => setPanelsView({...panelsView,mission:false}) 


    const  onClickCheckList = () => setPanelsView({...panelsView,checkList:true})
    const onClickCloseCheckList = () => setPanelsView({...panelsView,checkList:false})     

    const  onClickMap = () => setPanelsView({...panelsView,location:true})
    const onClickCloseLocation = () => setPanelsView({...panelsView,location:false}) 
    
    
    const onCharacterCreated = () => {
        logic.getCharacters(id)
        .then(charactersRecived => {
            setCharacters(charactersRecived)
        })
        .catch(error => toast.error(error.message))
    }

    const onClickNextLocation = (newLocationId) => {
        setLocation(newLocationId)
        
        logic.getLocation(newLocationId)
                    .then(location => {
                        setEnemies(location.enemies.sort())
                        logic.getNpcs(newLocationId)
                        .then(npcsRecived => {
                            setNpcs(npcsRecived)
                            const npcsPanels = npcs.reduce((acc, npc) => {
                                acc[`${npc.id}`] = false
                                return acc
                            },[])
                            
                            const enemiesPanels = location.enemies.sort().reduce((acc, enemy, index) => {
                                acc[`${enemy}_${index}`] = false
                                return acc
                            },[])
                            console.log(enemiesPanels)
                            setPanelsView(pervState => ({
                                ...pervState, ...enemiesPanels, ...npcsPanels
                            }))
                        })
                        .catch(error => {toast.error(error.message); console.log(error)}) 
            
                    })
                    .catch(error=> {toast.error(error.message);console.log(error)})
    }

    return (
        <View className='bg-[url("/images/background.jpg")] bg-cover bg-center h-[100vh] grid grid-flow-col  '>
            {presentLocationId && <NpcsBox onClickNpc={onClickNpc} locationId={presentLocationId} />}
            <View className='flex flex-col justify-between items-center'>
                <CharactersBox campaignId = {id} onClickCharacter={onClickCharacter}/>
                {characters?.map((character, index) => panelsView[character.id] && <CharacterDetails key={index} characterId={character.id} onClickClose={() => onCloseCharacter(character.id)}/>)}
                {npcs?.map((npc, index) => panelsView[npc.id] && <NpcDetails key={index} npcId={npc.id} onClickClose={() => onCloseNpc(npc.id)}/>)}
                {enemies?.sort().map((enemy, index) => panelsView[`${enemy}_${index}`] && <EnemyDetails key={index} enemyIndex={enemy} onClickClose={() => onCloseEnemy(`${enemy}_${index}`)}/>)}
                {panelsView.campaign && <CampaignDetails campaignData={campaignData} onClickClose = {onClickCloseDetails} 
                onCharacterAdded={onCharacterCreated}
                />}
                {panelsView.mission &&<MissionDetails onClickClose={onClickCloseMission} mission={currentMission}/>}
                {panelsView.checkList && <CheckList onClickClose={onClickCloseCheckList} mission = {currentMission}/>}
                {panelsView.location && <LocationDetails locationId={presentLocationId} onClickClose={onClickCloseLocation} setMission={setMission} setNextLocation={onClickNextLocation}/>}
                <CampaignMenu onclickBook={onclickBook} onClickPage={onClickPage} onClickCheckList= {onClickCheckList} onClickMap={onClickMap}/>
            </View>
            {presentLocationId && <EnemiesBox locationId={presentLocationId} onClickEnemy={onClickEnemy}></EnemiesBox>}
        </View>
        
    )
}

export default Campaign


