
import Button from '../../../components/core/Button'
import Heading from '../../../components/core/Heading'
import CharacterImage from '../../../components/Library/CharacterImage'
import DragHandleIcon from'../../../icons/drag-handle-svgrepo-com.svg'
import CrossIcon from '../../../icons/cross-svgrepo-com.svg'
import Image from '../../../components/core/Image'
import DetailValue from '../../../components/Library/DetailValue'
import DetailDoubleValue from '../../../components/Library/DetailDoubleValue'
import logic from '../../../logic'
import Draggable from 'react-draggable'
import { useState } from 'react'
import {toast} from 'sonner'


function CharacterDetails({characterId, onClickClose}) {
    const [character , setCharacter] = useState('')
    logic.getCharacter(characterId)
    .then((character) => {
        setCharacter(character)
    })
    .catch(error => toast.error(error.message))


    if(!character){
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
                    <Button onClick={onClickClose}>
                        <Image className='h-[3vh] cursor-pointer hover:scale-110 pointer-events-none'  src = {CrossIcon}></Image>
                    </Button>
                </div>
                <div className='grid grid-cols-3 items-center mx-8 px-2 pb-2 border-b-2 border-black/20'>
                <Heading level={4} className='text-3xl text-black justify-self-start'>{character.name}</Heading>
                <DetailValue className='justify-center flex flex-col justify-self-end ml-4'  headingStyle ='text-black underline text-center text-large' name='Current Hit Points' valueStyle='text-black text-center text-xl'>{character.hitPoints.currentHitPoints}</DetailValue>
                <CharacterImage src={character.image} className='border-gold1 justify-self-end  h-[9vh] w-[9vh]'></CharacterImage>
                </div>
                <div className='overflow-auto overflow-y-scroll h-[34vh] px-2 '>
                    <div className='grid grid-cols-3 border-b-2 border-black/20 pb-2'>
                    <DetailValue className='flex space-x-2 ' headingStyle ='text-black underline' name='Race:' valueStyle='text-black'>{character.race}</DetailValue>
                    <DetailValue className='flex space-x-2 ' headingStyle ='text-black underline' name='Class:' valueStyle='text-black'>{character.class}</DetailValue>
                    <DetailValue className='flex space-x-2 ' headingStyle ='text-black underline' name='Level:' valueStyle='text-black'>{character.level}</DetailValue>
                    <DetailValue className='flex space-x-2 ' headingStyle ='text-black underline' name='Background:' valueStyle='text-black'>{character.background}</DetailValue>
                    <DetailValue className='flex space-x-2 ' headingStyle ='text-black underline' name='Aligment:' valueStyle='text-black'>{character.aligment}</DetailValue>
                    <DetailValue className='flex space-x-2 ' headingStyle ='text-black underline' name='Expirience points:' valueStyle='text-black'>{character.expiriencePoints}</DetailValue>
                    </div>
                    <div className='grid grid-cols-3 border-b-2 border-black/20 pb-2'>
                        <DetailValue className='w-auto justify-center flex flex-col'  headingStyle ='text-black underline text-center' name='Armor Class' valueStyle='text-black text-center'>{character.armorClass}</DetailValue>
                        <DetailValue className='w-auto justify-center flex flex-col'  headingStyle ='text-black underline text-center' name='Iniciative' valueStyle='text-black text-center'>{character.iniciative}</DetailValue>
                        <DetailValue className='w-auto justify-center flex flex-col'  headingStyle ='text-black underline text-center' name='Speed' valueStyle='text-black text-center'>{character.speed}</DetailValue>
                    </div>
                    <div className='grid grid-cols-3 border-b-2 border-black/20 pb-2'>
                        <DetailDoubleValue className='w-auto justify-center flex flex-col' headingStyle ='text-black underline text-center' name='Strength' valueStyle='text-black text-center' value1={character.strength.score} value2={character.strength.modifier}/>
                        <DetailDoubleValue className='w-auto justify-center flex flex-col' headingStyle ='text-black underline text-center' name='Dexterity' valueStyle='text-black text-center' value1={character.dexterity.score} value2={character.dexterity.modifier}/>
                        <DetailDoubleValue className='w-auto justify-center flex flex-col' headingStyle ='text-black underline text-center' name='Constitution' valueStyle='text-black text-center' value1={character.constitution.score} value2={character.constitution.modifier}/>
                        <DetailDoubleValue className='w-auto justify-center flex flex-col' headingStyle ='text-black underline text-center' name='Iniciative' valueStyle='text-black text-center' value1={character.iniciativeSkill.score} value2={character.iniciativeSkill.modifier}/>
                        <DetailDoubleValue className='w-auto justify-center flex flex-col' headingStyle ='text-black underline text-center' name='Wishdom' valueStyle='text-black text-center' value1={character.wishdom.score} value2={character.wishdom.modifier}/>
                        <DetailDoubleValue className='w-auto justify-center flex flex-col' headingStyle ='text-black underline text-center' name='charisma' valueStyle='text-black text-center' value1={character.charisma.score} value2={character.charisma.modifier}/>
                    </div>
                    <div className='grid grid-cols-3 border-b-2 border-black/20 pb-2'>
                    <DetailValue className='w-auto justify-center flex flex-col'  headingStyle ='text-black underline text-center' name='Max Hp' valueStyle='text-black text-center'>{character.hitPoints.maxHitPoints}</DetailValue>
                    <DetailValue className='w-auto justify-center flex flex-col'  headingStyle ='text-black underline text-center' name='Temporal Hp' valueStyle='text-black text-center'>{character.hitPoints.temporalHitPoints}</DetailValue>
                    <DetailValue className='w-auto justify-center flex flex-col'  headingStyle ='text-black underline text-center' name='Hit Dice' valueStyle='text-black text-center'>{character.hitPoints.dice}</DetailValue>
                    </div>
                    <div className='grid grid-cols-3 border-b-2 border-black/20 pb-2'>
                    <Heading level={4} className='text-black text-large col-span-3'> Deathsaves</Heading>
                    <DetailValue className='w-auto justify-center flex space-x-1'  headingStyle ='text-black underline text-center' name='Strength:' valueStyle='text-black text-center'>{character.deathSaves.strength}</DetailValue>
                    <DetailValue className='w-auto justify-center flex space-x-1'  headingStyle ='text-black underline text-center' name='Dexterity' valueStyle='text-black text-center'>{character.deathSaves.dexterity}</DetailValue>
                    <DetailValue className='w-auto justify-center flex space-x-1'  headingStyle ='text-black underline text-center' name='Constitution' valueStyle='text-black text-center'>{character.deathSaves.constitution}</DetailValue>
                    <DetailValue className='w-auto justify-center flex space-x-1'  headingStyle ='text-black underline text-center' name='Iniciative' valueStyle='text-black text-center'>{character.deathSaves.iniciative}</DetailValue>
                    <DetailValue className='w-auto justify-center flex space-x-1'  headingStyle ='text-black underline text-center' name='Whisdom' valueStyle='text-black text-center'>{character.deathSaves.wishdom}</DetailValue>
                    <DetailValue className='w-auto justify-center flex space-x-1'  headingStyle ='text-black underline text-center' name='Charisma' valueStyle='text-black text-center'>{character.deathSaves.charisma}</DetailValue>
                    <DetailValue className='w-auto justify-center flex space-x-1 col-span-2 justify-self-start ml-5'  headingStyle ='text-black underline text-center' name='Death Saves Succeses:' valueStyle='text-black text-center'>{character.deathSaves.deathSavesSucceses}</DetailValue>
                    <DetailValue className='w-full justify-center flex space-x-1 justify-self-end mr-5'  headingStyle ='text-black underline text-center' name='Death Saves Failures:' valueStyle='text-black text-center'>{character.deathSaves.deathSavesFailures}</DetailValue>
                    </div>
                    <div className='grid grid-cols-3 border-b-2 border-black/20 pb-2'>
                    <DetailValue className='w-auto justify-center flex space-x-1'  headingStyle ='text-black underline text-center' name='Acrobatics:' valueStyle='text-black text-center'>{character.skills.acrobatics}</DetailValue>    
                    <DetailValue className='w-auto justify-center flex space-x-1'  headingStyle ='text-black underline text-center' name='AnimalHandling:' valueStyle='text-black text-center'>{character.skills.animalHandling}</DetailValue>    
                    <DetailValue className='w-auto justify-center flex space-x-1'  headingStyle ='text-black underline text-center' name='Arcana:' valueStyle='text-black text-center'>{character.skills.arcana}</DetailValue>    
                    <DetailValue className='w-auto justify-center flex space-x-1'  headingStyle ='text-black underline text-center' name='Athletics:' valueStyle='text-black text-center'>{character.skills.athletics}</DetailValue>    
                    <DetailValue className='w-auto justify-center flex space-x-1'  headingStyle ='text-black underline text-center' name='Deception:' valueStyle='text-black text-center'>{character.skills.deception}</DetailValue>    
                    <DetailValue className='w-auto justify-center flex space-x-1'  headingStyle ='text-black underline text-center' name='History:' valueStyle='text-black text-center'>{character.skills.history}</DetailValue>    
                    <DetailValue className='w-auto justify-center flex space-x-1'  headingStyle ='text-black underline text-center' name='Insight:' valueStyle='text-black text-center'>{character.skills.insight}</DetailValue>    
                    <DetailValue className='w-auto justify-center flex space-x-1'  headingStyle ='text-black underline text-center' name='Intimidation:' valueStyle='text-black text-center'>{character.skills.intimidation}</DetailValue>    
                    <DetailValue className='w-auto justify-center flex space-x-1'  headingStyle ='text-black underline text-center' name='Intimidation:' valueStyle='text-black text-center'>{character.skills.intimidation}</DetailValue>    
                    <DetailValue className='w-auto justify-center flex space-x-1'  headingStyle ='text-black underline text-center' name='Medicine:' valueStyle='text-black text-center'>{character.skills.medicine}</DetailValue>    
                    <DetailValue className='w-auto justify-center flex space-x-1'  headingStyle ='text-black underline text-center' name='Nature:' valueStyle='text-black text-center'>{character.skills.nature}</DetailValue>    
                    <DetailValue className='w-auto justify-center flex space-x-1'  headingStyle ='text-black underline text-center' name='Perception:' valueStyle='text-black text-center'>{character.skills.perception}</DetailValue>    
                    <DetailValue className='w-auto justify-center flex space-x-1'  headingStyle ='text-black underline text-center' name='Performance:' valueStyle='text-black text-center'>{character.skills.performance}</DetailValue>    
                    <DetailValue className='w-auto justify-center flex space-x-1'  headingStyle ='text-black underline text-center' name='Persuasion:' valueStyle='text-black text-center'>{character.skills.persuasion}</DetailValue>    
                    <DetailValue className='w-auto justify-center flex space-x-1'  headingStyle ='text-black underline text-center' name='Religion:' valueStyle='text-black text-center'>{character.skills.religion}</DetailValue>    
                    <DetailValue className='w-auto justify-center flex space-x-1'  headingStyle ='text-black underline text-center' name='Sleight Of Hand:' valueStyle='text-black text-center'>{character.skills.sleightOfHand}</DetailValue>    
                    <DetailValue className='w-auto justify-center flex space-x-1'  headingStyle ='text-black underline text-center' name='Stealth:' valueStyle='text-black text-center'>{character.skills.stealth}</DetailValue>    
                    <DetailValue className='w-auto justify-center flex space-x-1'  headingStyle ='text-black underline text-center' name='Survival:' valueStyle='text-black text-center'>{character.skills.survival}</DetailValue>    
                    </div>
                    <div className='border-b-2 border-black/20 pb-2'>
                        <Heading level={4} className='text-black text-large underline'>Atacks and Spellcasting</Heading>
                        <p className='text-black'>{character.attacksAndSpellcasting}</p>
                    </div>
                    <div className='border-b-2 border-black/20 pb-2'>
                        <Heading level={4} className='text-black text-large underline'>Equipment</Heading>
                        <p className='text-black'>{character.equipment}</p>
                    </div>
                    <div className='border-b-2 border-black/20 pb-2'>
                        <Heading level={4} className='text-black text-large underline'>Money</Heading>
                        <div className='grid grid-cols-3'>
                        <DetailValue className='w-auto justify-center flex space-x-1'  headingStyle ='text-black underline text-center' name='Copper:' valueStyle='text-black text-center'>{character.money.type.copper}</DetailValue> 
                        <DetailValue className='w-auto justify-center flex space-x-1'  headingStyle ='text-black underline text-center' name='Silver:' valueStyle='text-black text-center'>{character.money.type.silver}</DetailValue> 
                        <DetailValue className='w-auto justify-center flex space-x-1'  headingStyle ='text-black underline text-center' name='Electrum:' valueStyle='text-black text-center'>{character.money.type.electrum}</DetailValue> 
                        <DetailValue className='w-auto justify-center flex space-x-1'  headingStyle ='text-black underline text-center' name='Gold:' valueStyle='text-black text-center'>{character.money.type.gold}</DetailValue> 
                        <DetailValue className='w-auto justify-center flex space-x-1'  headingStyle ='text-black underline text-center' name='Platinium:' valueStyle='text-black text-center'>{character.money.type.platinium}</DetailValue> 
                        </div>
                    </div>
                    <div className='border-b-2 border-black/20 pb-2'>
                        <Heading level={4} className='text-black text-large underline'>Personality traits</Heading>
                        <p className='text-black'>{character.personalityTraits}</p>
                    </div>
                    <div className='border-b-2 border-black/20 pb-2'>
                        <Heading level={4} className='text-black text-large underline'>Ideals</Heading>
                        <p className='text-black'>{character.ideals}</p>
                    </div>
                    <div className='border-b-2 border-black/20 pb-2'>
                        <Heading level={4} className='text-black text-large underline'>Bonds</Heading>
                        <p className='text-black'>{character.bonds}</p>
                    </div>
                    <div className='border-b-2 border-black/20 pb-2'>
                        <Heading level={4} className='text-black text-large underline'>Flaws</Heading>
                        <p className='text-black'>{character.flaws}</p>
                    </div>
                    <div className='border-b-2 border-black/20 pb-2'>
                        <Heading level={4} className='text-black text-large underline'>Features and traits</Heading>
                        <p className='text-black'>{character.featuresAndTraits}</p>
                    </div>
                    <div className='border-b-2 border-black/20 pb-2'>
                        <Heading level={4} className='text-black text-large underline'>Other proeficiences and languages</Heading>
                        <p className='text-black'>{character.otherProeficiencesAndLanguages}</p>
                    </div>
                </div>
            </div>
        </Draggable>
    )
}

export default CharacterDetails