
import Button from '../../../components/core/Button'
import Heading from '../../../components/core/Heading'
import CharacterImage from '../../../components/Library/CharacterImage'
import DragHandleIcon from'../../../icons/drag-handle-svgrepo-com.svg'
import CrossIcon from '../../../icons/cross-svgrepo-com.svg'
import Image from '../../../components/core/Image'
import DetailValue from '../../../components/Library/DetailValue'
import DetailDoubleValue from '../../../components/Library/DetailDoubleValue'
import Draggable from 'react-draggable'
import logic from '../../../logic'
import { useState, useEffect } from 'react'


function NpcDetails({npcId, onClickClose}) {
    const [npc, setNpc] = useState('')
    useEffect(() =>{
        logic.getNpc(npcId)
        .then(npc => {
        setNpc(npc)
    })},[])



    if(!npc){
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


    return (
        <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 0, y: 100}}
        bounds= 'body'>
            <div className='bg-white/60 rounded-xl w-[42vw] h-[54vh] p-4 md:resize absolute' >
                <div className='flex justify-between'>
                    <div className='handle cursor-move'>
                        <img className='h-[3vh]  pointer-events-none' src={DragHandleIcon}></img>
                    </div>
                    <Button onClick={() => onClickClose()}>
                        <Image className='h-[3vh] cursor-pointer hover:scale-110 pointer-events-none'  src = {CrossIcon}></Image>
                    </Button>
                </div>
                <div className='grid grid-cols-3 items-center mx-8 px-2 pb-2 border-b-2 border-black/20'>
                <Heading level={4} className='text-3xl text-black justify-self-start'>{npc.name}</Heading>
                <DetailValue className='justify-center flex flex-col justify-self-end ml-4'  headingStyle ='text-black underline text-center text-large' name='Current Hit Points' valueStyle='text-black text-center text-xl'>{npc.hitPoints.currentHitPoints}</DetailValue>
                <CharacterImage src={npc.image} className='border-gold1 justify-self-end  h-[9vh] w-[9vh]'></CharacterImage>
                </div>
                <div className='overflow-auto overflow-y-scroll h-[34vh] px-2 '>
                    <div className='grid grid-cols-3 border-b-2 border-black/20 pb-2'>
                    <DetailValue className='flex space-x-2 ' headingStyle ='text-black underline' name='Race:' valueStyle='text-black'>{npc.race}</DetailValue>                            
                    <DetailValue className='flex space-x-2 ' headingStyle ='text-black underline' name='Aligment:' valueStyle='text-black'>{npc.alignment}</DetailValue>
                    <DetailValue className='flex space-x-2 ' headingStyle ='text-black underline' name='Challenge rating:' valueStyle='text-black'>{npc.challengeRating}</DetailValue>
                    </div>
                    <div className='border-b-2 border-black/20 pb-2'>
                        <Heading level={4} className='text-black text-large underline'>description</Heading>
                        <p className='text-black'>{npc.description}</p>
                    </div>
                    <div className='grid grid-cols-2 border-b-2 border-black/20 pb-2'>
                        <DetailValue className='w-auto justify-center flex flex-col'  headingStyle ='text-black underline text-center' name='Armor Class' valueStyle='text-black text-center'>{npc.armorClass}</DetailValue>
                        <DetailValue className='w-auto justify-center flex flex-col'  headingStyle ='text-black underline text-center' name='Speed' valueStyle='text-black text-center'>{npc.speed}</DetailValue>
                    </div>
                    <div className='grid grid-cols-3 border-b-2 border-black/20 pb-2'>
                        <DetailDoubleValue className='w-auto justify-center flex flex-col' headingStyle ='text-black underline text-center' name='Strength' valueStyle='text-black text-center' value1={npc.strength.score} value2={npc.strength.modifier}/>
                        <DetailDoubleValue className='w-auto justify-center flex flex-col' headingStyle ='text-black underline text-center' name='Dexterity' valueStyle='text-black text-center' value1={npc.dexterity.score} value2={npc.dexterity.modifier}/>
                        <DetailDoubleValue className='w-auto justify-center flex flex-col' headingStyle ='text-black underline text-center' name='Constitution' valueStyle='text-black text-center' value1={npc.constitution.score} value2={npc.constitution.modifier}/>
                        <DetailDoubleValue className='w-auto justify-center flex flex-col' headingStyle ='text-black underline text-center' name='Iniciative' valueStyle='text-black text-center' value1={npc.iniciative.score} value2={npc.iniciative.modifier}/>
                        <DetailDoubleValue className='w-auto justify-center flex flex-col' headingStyle ='text-black underline text-center' name='Wishdom' valueStyle='text-black text-center' value1={npc.wishdom.score} value2={npc.wishdom.modifier}/>
                        <DetailDoubleValue className='w-auto justify-center flex flex-col' headingStyle ='text-black underline text-center' name='charisma' valueStyle='text-black text-center' value1={npc.charisma.score} value2={npc.charisma.modifier}/>
                    </div>
                    <div className='grid grid-cols-2 border-b-2 border-black/20 pb-2'>
                    <DetailValue className='w-auto justify-center flex flex-col'  headingStyle ='text-black underline text-center' name='Max Hp' valueStyle='text-black text-center'>{npc.hitPoints.maxHitPoints}</DetailValue>
                    <DetailValue className='w-auto justify-center flex flex-col'  headingStyle ='text-black underline text-center' name='Temporal Hp' valueStyle='text-black text-center'>{npc.hitPoints.temporalHitPoints}</DetailValue>
                    </div>
                    
                    <div className='border-b-2 border-black/20 pb-2'>
                        <Heading level={4} className='text-black text-large underline'>Actions</Heading>
                        {npc.actions.map((action, index) => <DetailValue key={index} className='w-auto justify-center flex space-x-2'  headingStyle ='text-black text-center' name={`${action.name}:`} valueStyle='text-black text-center'>{action.description}</DetailValue>)}
                    </div>
                    <div className='border-b-2 border-black/20 pb-2'>
                        <Heading level={4} className='text-black text-large underline'>Skill</Heading>
                        <DetailValue className='w-auto justify-center flex space-x-2'  headingStyle ='text-black text-center' name={`${npc.skill.name}:`} valueStyle='text-black text-center'>{npc.skill.modifier}</DetailValue>
                    </div>
                    <div className='border-b-2 border-black/20 pb-2'>
                        <Heading level={4} className='text-black text-large underline'>languages</Heading>
                        <p className='text-black'>{npc.lenguages}</p>
                    </div>
                </div>
            </div>
        </Draggable>
    )
}

export default NpcDetails