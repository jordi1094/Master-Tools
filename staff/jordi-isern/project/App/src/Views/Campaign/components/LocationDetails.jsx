import Button from '../../../components/core/Button'
import Heading from '../../../components/core/Heading'
import View from '../../../components/Library/View'
import CharacterImage from '../../../components/Library/CharacterImage'
import PlusIcon from '../../../icons/plus.svg'
import DragHandleIcon from'../../../icons/drag-handle-svgrepo-com.svg'
import CrossIcon from '../../../icons/cross-svgrepo-com.svg'
import Image from '../../../components/core/Image'
import Draggable from 'react-draggable'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import logic from '../../../logic'
import MissionForm from './MisionForm'


function LocationDetails({onClickClose, locationId, setMission, setNextLocation}) {
    const [presentLocation, setPresentLocation] = useState(locationId)
    const [location, setLocation] = useState('')
    const [nextLocations, setNextLocations] = useState([])
    const [missionPanel, setMissionsPanel] = useState(false)
    const [missions, setMissions] = useState([])
    const {id} = useParams
    const navigate= useNavigate()

    useEffect(() => {
        logic.getLocation(locationId)
        .then((LocationToSet) =>{
            setLocation(LocationToSet)
            logic.getLocations(locationId)
            .then(nextLocationsList => setNextLocations(nextLocationsList))
            .catch((error)=> toast.error(error.message))
            logic.getMissions(locationId)
            .then(missionsList => setMissions(missionsList))
            .catch(error => toast.error(error.message))
        })
        .catch((error) => toast.error(error.message))
    },[presentLocation])

    if(!location){
        return<Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        bounds= 'body'

        >
        <div className='bg-white/60 rounded-xl w-[20vw] p-4 absolute' >
            <div className=' flex justify-between'>
                <div className='handle cursor-move'> 
                    <img className='h-[3vh]  pointer-events-none' src={DragHandleIcon}></img>
                </div>
                <Button onClick={onClickClose}>
                <Image className='h-[3vh] cursor-pointer hover:scale-110 pointer-events-none'  src = {CrossIcon}></Image>
                </Button>
            </div>

            <p className='text-black'>loading</p>
        </div>
        </Draggable>
    }

    const onClickAddNextLocation = () => {
        try{
            logic.createLocation()
            .then(newLocation => {
                location.nextLocations.push(newLocation._id.toString())
                logic.saveLocation(location.id, location)
                .then(() =>{navigate(`/createLocation/${newLocation._id.toString()}`)})
                .catch(error => toast.error(error.message))
            })
            .catch((error) => toast.error(error.message))
        }catch(error) {
            toast.error(error.message)
        }
    }

    const onClickAddMission= () => {
        setMissionsPanel(true)
    }

    const closeMissionsForm = () => {
        setMissionsPanel(false)
    } 

    return (
        <>
        <Draggable
            axis='both'
            handle='.handle'
            defaultPosition={{x:0, y:100}}
            bounds='body'
        >
            <div className='bg-white/60 rounded-xl w-[40vw] h-[auto] p-4 md:resize absolute' >
                <div className='flex justify-between'>
                    <div className='handle cursor-move'>
                        <img className='h-[3vh]  pointer-events-none' src={DragHandleIcon}></img>
                    </div>
                    <Button onClick={onClickClose}>
                        <Image className='h-[3vh] cursor-pointer hover:scale-110 pointer-events-none'  src = {CrossIcon}></Image>
                    </Button>
                </div>
                <Heading level='1' className='underline text-center text-black'>{location.name}</Heading>
                <View className='border-b-[1px] pb-3'>
                <div className=' w-[39vw] h-[45vh] overflow-auto overflow-y-scroll'>
                    <Heading level='2' className='text-black mb-1 border-b-2 border-black/20'>Description</Heading>
                    <p className='text-black'>{location.description}</p>
                    
                    <div className=' grid grid-cols-2 items-center alaign-center border-b-2 border-black/20'>
                    <Heading level='2' className='text-black mb-[1px]'>Missions</Heading>
                    <Button  onClick={onClickAddMission} type="button" className="bg-gold1 rounded-md w-auto px-2 hover:scale-105 active:scale-100 text-black text-sm h-5">
                                        Add Mission
                    </Button>
                    </div>
                    <ul>
                    {missions.length > 0 ? (missions.map((mision, index) => <li className='text-black cursor-pointer active:text-gold1' key={index} onClick= {() => setMission(mision)}>{mision.title}</li>)) : <p className='text-black'> No missions</p>}
                    </ul>
                    <Heading level='2' className='text-black mb-1 border-b-2 border-black/20'>Objects</Heading>
                    <ul>
                        {Object.keys(location.objects).length > 0 ? (location.objects.map((object, index) => <li className='text-black' key={index}>{object}</li>)) : <p className='text-black'> No objects</p>}
                    </ul>
                    <div className=' grid grid-cols-2 items-center alaign-center border-b-2 border-black/20'>
                    <Heading level='2' className='text-black mb-[1px]'>Next Locations</Heading>
                    <Button  onClick={onClickAddNextLocation} type="button" className="bg-gold1 rounded-md w-auto px-2 hover:scale-105 active:scale-100 text-black text-sm h-5">
                                        Add Next Location
                    </Button>
                </div>
                <ul>
                    {Object.keys(nextLocations).length > 0 ? (nextLocations.map((location, index) => <li key={index} className='text-black cursor-pointer active:text-gold1' onClick={() => {setNextLocation(location._id), setPresentLocation(location._id)}}> {location.name}</li>)) : <p className='text-black'> No next Locations</p>}
                </ul>
                
                </div>
            </View>
            </div>

        </Draggable>
        {missionPanel && <MissionForm locationId={locationId} onClose={closeMissionsForm}/>}
        </>
    )
}

export default LocationDetails