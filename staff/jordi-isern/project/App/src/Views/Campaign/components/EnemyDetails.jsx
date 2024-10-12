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
import {toast} from 'sonner'


function EnemyDetails({enemyIndex, onClickClose}) {
    const [enemy ,setEnemy] = useState('')
    useEffect(() =>{
        logic.getEnemy(enemyIndex)
        .then(enemy => {
            setEnemy(enemy)
        })
        .cathc(error => toast.error(error.message))
    },[])
    const setmodifiervalue= (value) => {
        if(value === 1) {return '-5'}
        if(value >=2 && value <=3){return'-4'}
        if(value >=4 && value<=5){return '-3'}
        if(value >=6 && value<=7){return '-2'}
        if(value >=6 && value<=7){return '-2'}
        if(value >=8 && value<=9){return '-1'}
        if(value >=10 && value<=11){return '-0'}
        if(value >=12 && value<=13){return '1'}
        if(value >=14 && value<=15){return '2'}
        if(value >=16 && value<=17){return '3'}
        if(value >=18 && value<=19){return '4'}
        if(value >=20 && value<=21){return '5'}
        if(value >=22 && value<=23){return '6'}
        if(value >=24 && value<=25){return '7'}
        if(value >=26 && value<=27){return '8'}
        if(value >=28 && value<=29){return '9'}
        if(value === 30){return '10'}
    }
    if(!enemy){
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
        defaultPosition={{x: 100, y: 100}}
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
                <Heading level={4} className='text-3xl text-black justify-self-start'>{enemy.name}</Heading>
                <DetailValue className='justify-center flex flex-col justify-self-end ml-4'  headingStyle ='text-black underline text-center text-large' name='Current Hit Points' valueStyle='text-black text-center text-xl'>{enemy.hit_points}</DetailValue>
                </div>
                <div className='overflow-auto overflow-y-scroll h-[34vh] px-2 '>
                    <div className='grid grid-cols-3 border-b-2 border-black/20 pb-2'>
                    <DetailValue className='flex space-x-2 ' headingStyle ='text-black underline' name='Race:' valueStyle='text-black'>{enemy.race}</DetailValue>                            
                    <DetailValue className='flex space-x-2 ' headingStyle ='text-black underline' name='Aligment:' valueStyle='text-black'>{enemy.alignment}</DetailValue>
                    <DetailValue className='flex space-x-2 ' headingStyle ='text-black underline' name='type:' valueStyle='text-black'>{enemy.type}</DetailValue>
                    <DetailValue className='flex space-x-2 ' headingStyle ='text-black underline' name='size:' valueStyle='text-black'>{enemy.size}</DetailValue>
                    <DetailValue className='flex space-x-2 ' headingStyle ='text-black underline' name='Challenge rating:' valueStyle='text-black'>{enemy.challenge_rating}</DetailValue>
                    </div>
                    <div className='grid grid-cols-2 border-b-2 border-black/20 pb-2'>
                        <DetailValue className='w-auto justify-center flex flex-col'  headingStyle ='text-black underline text-center' name='Armor Class' valueStyle='text-black text-center'>{enemy.armorClass}</DetailValue>
                        <DetailValue className='w-auto justify-center flex flex-col'  headingStyle ='text-black underline text-center' name='Speed' valueStyle='text-black text-center'>{enemy.speed.walk}</DetailValue>
                    </div>
                    <div className='grid grid-cols-3 border-b-2 border-black/20 pb-2'>
                        <DetailDoubleValue className='w-auto justify-center flex flex-col' headingStyle ='text-black underline text-center' name='Strength' valueStyle='text-black text-center' value1={enemy.strength} value2={setmodifiervalue(enemy.strength)}/>
                        <DetailDoubleValue className='w-auto justify-center flex flex-col' headingStyle ='text-black underline text-center' name='Dexterity' valueStyle='text-black text-center' value1={enemy.dexterity} value2={setmodifiervalue(enemy.dexterity)}/>
                        <DetailDoubleValue className='w-auto justify-center flex flex-col' headingStyle ='text-black underline text-center' name='Constitution' valueStyle='text-black text-center' value1={enemy.constitution} value2={setmodifiervalue(enemy.constitution)}/>
                        <DetailDoubleValue className='w-auto justify-center flex flex-col' headingStyle ='text-black underline text-center' name='Intelligence' valueStyle='text-black text-center' value1={enemy.intelligence} value2={setmodifiervalue(enemy.intelligence)}/>
                        <DetailDoubleValue className='w-auto justify-center flex flex-col' headingStyle ='text-black underline text-center' name='Wisdom' valueStyle='text-black text-center' value1={enemy.wisdom} value2={setmodifiervalue(enemy.wisdom)}/>
                        <DetailDoubleValue className='w-auto justify-center flex flex-col' headingStyle ='text-black underline text-center' name='Charisma' valueStyle='text-black text-center' value1={enemy.charisma} value2={setmodifiervalue(enemy.charisma)}/>
                        
                    </div>
                    <div className='grid grid-cols-2 border-b-2 border-black/20 pb-2'>
                        <Heading level={4} className='text-black text-large underline'>Proficiencies</Heading>
                        <DetailValue className='w-auto justify-center flex'  headingStyle ='text-black underline text-center' name='Proficiency bonus:' valueStyle='text-black text-center'>{enemy.proficiency_bonus}</DetailValue>
                        {enemy.proficiencies.map((proficiency, index) => <DetailValue key={index} className='col-span-2 w-auto justify-center flex space-x-2'  headingStyle ='text-black text-center' name={`${proficiency.proficiency.name}:`} valueStyle='text-black text-center'>{proficiency.value}</DetailValue>)}
                    </div>
                </div>
            </div>    
        </Draggable>
    )
}

export default EnemyDetails