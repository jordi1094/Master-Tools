
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

function CampaignDetails({onClickClose, campaignData}) {
    const [charactersList, setCharacters] = useState([])

    useEffect(() => {
        logic.getCharacters(campaignData.id)
        .then(characters => setCharacters(characters))
        .catch(error => console.log(error))
    },[])

    return (
      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 0, y: 100}}
        bounds= 'body'

        >
            <div className='bg-white/60 rounded-xl w-[50vw] p-4 md:resize absolute' >
            <div className=' flex justify-between'>
                <div className='handle cursor-move'> 
                    <img className='h-[3vh]  pointer-events-none' src={DragHandleIcon}></img>
                </div>
                <Button onClick={onClickClose}>
                <Image className='h-[3vh] cursor-pointer hover:scale-110 pointer-events-none'  src = {CrossIcon}></Image>
                </Button>
            </div>
            <Heading level='1' className='underline text-center text-black'>{campaignData.title}</Heading>
            <View className='border-b-[1px] border-black pb-3'>
                <Heading level='2' className='text-black pb-2'>Background</Heading>
                <p className='text-black'>{campaignData.background}</p>
            </View>
            <View className='border-b-[1px] border-black pb-3'>
                <Heading level='2' className='text-black pb-2'>Objective</Heading>
                <p className='text-black'>{campaignData.objective}</p>
            </View>
            <View>
                <Heading level='2' className='text-black pb-2'>Characters</Heading>
                <View className='flex items-center gap-4'>
                {charactersList.map((character, index) => <CharacterImage key= {index} src={character.image} className='border-gold1' />)}
                    <Button>
                        <Image src= {PlusIcon} className='h-[16vh]'></Image>
                    </Button>
                </View>
            </View>
            </div>
      </Draggable>
    );
}

export default CampaignDetails