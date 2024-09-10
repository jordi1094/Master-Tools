import{useForm} from 'react-hook-form'
import logic from '../../logic'
import Button from "../../components/core/Button"
import Form from "../../components/core/Form"
import Field from "../../components/core/Field"
import CombatStats from "./components/CombatStats.jsx"
import CharacterInfoPanel from "./components/CharacterInfoPanel.jsx"
import CharacterStatsPanel from "../../components/Library/CharacterStatsPanel.jsx"
import DeathSavesPanel from "./components/DeathSavesPanel.jsx"
import HitPointsPanel from "../../components/Library/HitPointsPanel.jsx"
import SkillsPanel from "./components/SkillsPanel.jsx"
import TextAreaField from "../../components/core/TextAreaField"
import EquipmentPanel from "./components/EquipmentPanel.jsx"
import CrossIcon from '../../icons/cross-svgrepo-com.svg'
import Image from '../../components/core/Image'
import React from "react"

function CharacterForm ({closeForm ,onCharacterCreated, campaignId}){
    const {register, handleSubmit, formState:{errors}} = useForm({
        shouldFocusError: false,
        validateCriteriaMode: "all"
      })

    const onSubmit = handleSubmit((characterData) => {

        characterData.acrobatics = Number(characterData.acrobatics)
        characterData.animalHandling = Number(characterData.animalHandling)
        characterData.arcana = Number(characterData.arcana)
        characterData.armorClass = Number(characterData.armorClass)
        characterData.athletics = Number(characterData.athletics)
        characterData.charismaDeathSave = Number(characterData.charismaDeathSave)
        characterData.charismaModifier = Number(characterData.charismaModifier)
        characterData.charismaScore = Number(characterData.charismaScore)
        characterData.constitutionDeathSave = Number(characterData.constitutionDeathSave)
        characterData.constitutionModifier = Number(characterData.constitutionModifier)
        characterData.constitutionScore = Number(characterData.constitutionScore)
        characterData.cooper = Number(characterData.cooper)
        characterData.currentHitPoints = Number(characterData.currentHitPoints)
        characterData.deathSavesFailures = Number(characterData.deathSavesFailures)
        characterData.deathSavesSucceses = Number(characterData.deathSavesSucceses)
        characterData.deception = Number(characterData.deception)
        characterData.dexterityDeathSave = Number(characterData.dexterityDeathSave)
        characterData.dexterityModifier = Number(characterData.dexterityModifier)
        characterData.dexterityScore = Number(characterData.dexterityScore)
        characterData.electrum = Number(characterData.electrum)
        characterData.exp = Number(characterData.exp)
        characterData.gold = Number(characterData.gold)
        characterData.history = Number(characterData.history)
        characterData.iniciative = Number(characterData.iniciative)
        characterData.iniciativeDeathSave = Number(characterData.iniciativeDeathSave)
        characterData.initiativeModifier = Number(characterData.initiativeModifier)
        characterData.initiativeScore = Number(characterData.initiativeScore)
        characterData.insight = Number(characterData.insight)
        characterData.intimidation = Number(characterData.intimidation)
        characterData.investigation = Number(characterData.investigation)
        characterData.level = Number(characterData.level)
        characterData.maxHitPoints = Number(characterData.maxHitPoints)
        characterData.medicine = Number(characterData.medicine)
        characterData.nature = Number(characterData.nature)
        characterData.perception = Number(characterData.perception)
        characterData.performance = Number(characterData.performance)
        characterData.persuasion = Number(characterData.persuasion)
        characterData.platinium = Number(characterData.platinium)
        characterData.proficiencyBonus = Number(characterData.proficiencyBonus)
        characterData.religion = Number(characterData.religion)
        characterData.silver = Number(characterData.silver)
        characterData.sleightOfHand = Number(characterData.sleightOfHand)
        characterData.speed = Number(characterData.speed)
        characterData.stealth = Number(characterData.stealth)
        characterData.strengthDeathSave = Number(characterData.strengthDeathSave)
        characterData.strengthModifier = Number(characterData.strengthModifier)
        characterData.strengthScore = Number(characterData.strengthScore)
        characterData.survival = Number(characterData.survival)
        characterData.temporalHitPoints = Number(characterData.temporalHitPoints)
        characterData.wisdomModifier = Number(characterData.wisdomModifier)
        characterData.wisdomScore = Number(characterData.wisdomScore)
        characterData.wishdomDeathSave = Number(characterData.wishdomDeathSave)
        characterData.campaignId = campaignId 
        try{
            
            logic.createCharacter(characterData)
                .then((character) => {
                    onCharacterCreated(character)})
                .catch(error => {
                    console.error(error)
                })
            
        }catch(error){
        console.error(error)       
        }
    })
    return (
        <div className="fixed w-screen h-screen bg-[url(../../public/images/backgroundBlue.jpg)] bg-cover bg-center top-0 " >
            <div className="absolute top-0 left-0 w-full h-full overflow-y-auto">
                <Form onSubmit={onSubmit} className='px-[7vw] pt-[5vh] grid grid-cols-4 grid-rows-[4vh] gap-2 justify-items-center'>
                    <Field id='name' className="col-span-2 flex gap-2 h-auto w-full" classNameInput="rounded-md p-2 bg-white/70 w-full text-black font-bold focus:outline-none" autoComplete='off' formHook={register('name',{
                        required:{
                            value: true,
                            message: 'Name is required'
                        }, minLength:{
                            value: 2,
                            message: 'Name have to be longer than 2 caracters'
                        }
                    } )}>
                        <h5 className="text-3xl m-0">Name</h5>
                    </Field>
                    <div className='col-span-2 grid grid-cols-3 w-full'>
                        <Field id='inspiration' type='checkbox' className='flex justify-start w-full items-center h-full text-xl font-bold' classNameInput=' ml-5 scale-150 focus:outline-none' formHook={register('inspiration',{
                        })}> Inspiration</Field>
                        <Field id='image' type ='url' placeholder='Insert a Link from a image' className='flex justify-start w-full items-center h-full text-xl font-bold gap-2' classNameInput='rounded-md px-3 focus:outline-none  placeholder:text-base font-normal' formHook={register('image',{
                            required:{
                                value:true,
                                message: 'Image is required'
                            },pattern:{
                                value: /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
                                message: 'Image link is not correct try another one please'
                            }
                        })}>
                            Image</Field>
                    <Button onClick={closeForm} className='bg-gold1 rounded-md h-7 w-7 flex justify-center items-center p-0 self-center justify-self-end'>
                        <Image src={CrossIcon} className='pointer-events-none h-6 m-0'/>
                    </Button>
                    </div>

                    <CombatStats register={register} className='col-span-2 row-span-2 bg-slate-700/60 w-full rounded-md grid grid-cols-4 p-2' />
                    <CharacterInfoPanel register={register} className='col-span-2 row-span-2 bg-slate-700/60 w-full rounded-md p-2 grid grid-cols-3 gap-2 justify-start px-[1vw]' />
                    <div></div>
                    <CharacterStatsPanel register={register} className=' col-span-2 row-span-2 bg-slate-700/60 w-[130%] rounded-md grid grid-cols-6 py-2 px-6 gap-7'/>
                    <div className="col-span-3"></div>
                    <div></div>
                    <DeathSavesPanel className='bg-slate-700/60 rounded-md w-full p-2' register={register}/>
                    <HitPointsPanel type='character' className='bg-slate-700/60 rounded-md w-full p-2 flex flex-col  gap-2 ' register ={register}/>
                    <SkillsPanel className='col-span-2 bg-slate-700/60 rounded-md w-full p-2 ' register={register}></SkillsPanel>
                    <EquipmentPanel className='col-span-2 bg-slate-700/60 rounded-md w-full p-2' register={register}/>
                    <TextAreaField id='attacksAndSpellcasting' className=' bg-slate-700/60 rounded-md w-full p-2 flex flex-col' classNameLabel='pb-3 underline font-bold' classNameInput="text-black resize-none outline-none w-full h-[15vh]" formHook={register('attacksAndSpellcasting')}>Atacks and Spellcasting</TextAreaField>
                    <TextAreaField id='otherProeficiencesAndLanguages' className=' bg-slate-700/60 rounded-md w-full p-2 flex flex-col' classNameLabel='pb-3 underline font-bold' classNameInput="text-black resize-none outline-none w-full h-[15vh]" formHook={register('otherProeficiencesAndLanguages')}>Other proeficiences and languages</TextAreaField>
                    <TextAreaField id='personalityTraits' className=' bg-slate-700/60 rounded-md w-full p-2 flex flex-col' classNameLabel='pb-3 underline font-bold' classNameInput="text-black resize-none outline-none w-full h-[15vh]" formHook={register('personalityTraits', {
                        required:{
                            value:true,
                            message: 'Personality traits is required'
                        }
                    })}>Personality traits</TextAreaField>

                    <TextAreaField id='ideals' className=' bg-slate-700/60 rounded-md w-full p-2 flex flex-col' classNameLabel='pb-3 underline font-bold' classNameInput="text-black resize-none outline-none w-full h-[15vh]" formHook={register('ideals', {
                        required:{
                            value:true,
                            message: 'Ideals is required'
                        }
                    })}>Ideals</TextAreaField>

                    <TextAreaField id='bonds' className=' bg-slate-700/60 rounded-md w-full p-2 flex flex-col' classNameLabel='pb-3 underline font-bold' classNameInput="text-black resize-none outline-none w-full h-[15vh]" formHook={register('bonds', {
                        required:{
                            value:true,
                            message: 'Bonds is required'
                        }
                    })}>Bonds</TextAreaField>
                    <TextAreaField id='flaws' className=' bg-slate-700/60 rounded-md w-full p-2 flex flex-col' classNameLabel='pb-3 underline font-bold' classNameInput="text-black resize-none outline-none w-full h-[15vh]" formHook={register('flaws', {
                        required:{
                            value:true,
                            message: 'Flaws is required'
                        }
                    })}>Flaws</TextAreaField>
                    <TextAreaField id='featuresAndTraits' className=' col-span-4 bg-slate-700/60 rounded-md w-full p-2 flex flex-col' classNameLabel='pb-3 underline font-bold' classNameInput="text-black resize-none outline-none w-full h-[15vh]" formHook={register('featuresAndTraits', {
                        required:{
                            value:true,
                            message: 'Feature and traits is required'
                        }
                    })}>Features and traits</TextAreaField>
                    
                <div className=' col-span-4 w-full'>
                    {Object.keys(errors).length > 0 && (
                        <div  className=' bg-red-50 rounded-md w-full px-3 py-2'>
                            <h3 className='text-red-900 font-bold'>Errors:</h3>
                            <ul className='grid grid-cols-3 gap-x-5'>
                                
                                {Object.values(errors).map((error, index)=> {
                                    return(<li key ={index} className='text-red-600'>- {error.message}</li>
                                )})}
                            </ul>
                        </div>
                    )}
                </div>
                    <Button type='submmit' className='col-span-4 w-full h-auto rounded-md hover:scale-y-110 mb-[15vh] bg-gold1 text-black'> Save Character</Button>
                </Form>
            </div>
        </div>
    )

}

export default CharacterForm