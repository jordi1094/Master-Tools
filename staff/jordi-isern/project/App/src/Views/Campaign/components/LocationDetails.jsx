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
import logic from '../../../logic'


function LocationDetails({onClickClose, locationId}) {
    const [location, setLocation] = useState('')
    const [nextLocations, setNextLocations] = useState([])

    useEffect(() => {
        logic.getLocation(locationId)
        .then(() =>{
            logic.getLocations(locationId)
            .then(nextLocationsList => setNextLocations(nextLocationsList))
            .catch((error)=> console.log(error))
        })
        .catch((error) => console.log(error))
    },[locationId])

    if(!location){
        return <p>Loagind...</p>
    }

    return (
        <Draggable
            axis='both'
            handle='.handle'
            defaultPosition={{x:0, y:100}}
            bounds='body'
        >
            <div className='bg-white/60 rounded-xl w-[50vw] p-4 md:resize absolute' >
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
                <Heading level='2' className='text-black mb-1 border-b-2 border-black/20'>Description</Heading>
                <text className='text-black'>{location.description}</text>
                <Heading level='2' className='text-black mb-1 border-b-2 border-black/20'>Objects</Heading>
                <ul>
                    {Object.keys(location.objects).length > 0 ? (location.objects.map((object, index) => <li className='text-black' key={index}>{object}</li>)) : <text> No objects</text>}
                </ul>
                <Heading level='2' className='text-black mb-1 border-b-2 border-black/20'>Next Locations</Heading>
                <ul>
                    {Object.keys(nextLocations).length > 0 ? (nextLocations.map((location, index) => <li key={index}> {location.name}</li>)) : <text> No next Locations</text>}
                </ul>
                
            </View>
            </div>

        </Draggable>
    )
}

export default LocationDetails