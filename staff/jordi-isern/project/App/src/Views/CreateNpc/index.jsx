import{useForm} from 'react-hook-form'
import logic from '../../logic'
import Button from "../../components/core/Button"
import Form from "../../components/core/Form"
import Field from "../../components/core/Field"
import HitPointsPanel from "../../components/Library/HitPointsPanel"
import MainInfoNpc from '../CreateCampaign/components/MainInfoNpc'
import TextAreaField from "../../components/core/TextAreaField"
import CrossIcon from '../../icons/cross-svgrepo-com.svg'
import Image from '../../components/core/Image'
import React from "react"
import CharacterStatsPanel from '../../components/Library/CharacterStatsPanel'
import ActionInput from '../../components/Library/ActionInput'

function NpcForm ({closeForm ,onNpcCreated, locationId}){
    const {register, handleSubmit, formState:{errors}} = useForm({
        shouldFocusError: false,
        validateCriteriaMode: "all"
      })

     const onSubmit = handleSubmit((npcData) =>{
        npcData.location = locationId
        npcData.armorClass = Number(npcData.armorClass)
        npcData.challengeRating = Number(npcData.challengeRating)
        npcData.speed = Number(npcData.speed)
        npcData.charismaModifier = Number(npcData.charismaModifier)
        npcData.charismaScore = Number(npcData.charismaScore)
        npcData.constitutionModifier = Number(npcData.constitutionModifier)
        npcData.constitutionScore = Number(npcData.constitutionScore)
        npcData.currentHitPoints = Number(npcData.currentHitPoints)
        npcData.dexterityModifier = Number(npcData.dexterityModifier)
        npcData.dexterityScore = Number(npcData.dexterityScore)
        npcData.initiativeModifier = Number(npcData.initiativeModifier)
        npcData.initiativeScore = Number(npcData.initiativeScore)
        npcData.maxHitPoints = Number(npcData.maxHitPoints)
        npcData.strengthModifier = Number(npcData.strengthModifier)
        npcData.strengthScore = Number(npcData.strengthScore)
        npcData.temporalHitPoints = Number(npcData.temporalHitPoints)
        npcData.wisdomModifier = Number(npcData.wisdomModifier)
        npcData.wisdomScore = Number(npcData.wisdomScore)
        npcData.skillModifier = Number(npcData.skillModifier)

        try{
            logic.createNpc(npcData)
                .then((npc) =>{
                    onNpcCreated(npc)})
                .catch(error => toast.error(error.message))
        }catch(error) {
            toast.error(error.message)
        }

     })
    return (
        <div className="fixed w-screen h-screen bg-[url(../../public/images/backgroundBlue.jpg)] bg-cover bg-center top-0 " >
            <div className="absolute top-0 left-0 w-full h-full overflow-y-auto">
                <Form  onSubmit={onSubmit}className='px-[7vw] pt-[5vh] grid grid-cols-4 grid-rows-[4vh] gap-2 justify-items-center'>
                    <Field id='name' className="col-span-2 flex gap-2 h-auto w-full" classNameInput="rounded-md p-2 bg-white/70 w-full text-black font-bold" formHook={register('name',{
                        required:{
                            value: true,
                            message: 'Name is required'
                        }, minLength:{
                            value: 2,
                            message: 'Name have to be longer than 2 caracters'
                        }
                    } )}>
                        <h2 className="text-3xl m-0">Name</h2>
                    </Field>
                    <div className='col-span-2 grid grid-cols-2 w-full'>
                        <Field id='image' type ='url' placeholder='Insert a Link from a image' className='flex justify-start w-full items-center h-full text-xl font-bold gap-2' classNameInput='rounded-md px-3 placeholder:text-base font-normal' formHook={register('image',{
                            required:{
                                value:true,
                                message: 'Image is required'
                            },pattern:{
                                value: /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
                                message: 'Image link is no correct try another'
                            }
                        })}>
                            Image</Field>
                    <Button onClick={closeForm} className='bg-gold1 rounded-md h-7 w-7 flex justify-center items-center p-0 self-center justify-self-end'>
                        <Image src={CrossIcon} className='pointer-events-none h-6 m-0'/>
                    </Button>
                    </div>
                    
                    
                    <MainInfoNpc register={register} className='col-span-3 bg-slate-700/60 rounded-md w-full p-2'/>
                    
                    <HitPointsPanel className='bg-slate-700/60 row-span-2 rounded-md w-full p-2 flex flex-col  gap-2 ' register ={register}/>
                    
                    <TextAreaField id='description' className='col-span-1 row-span-2 bg-slate-700/60 rounded-md w-full p-2 flex flex-col' classNameLabel='pb-3 underline font-bold' classNameInput="text-black resize-none outline-none w-full h-full" formHook={register('description', {
                        required:{
                            value:true,
                            message: 'description is required'
                        }
                    })}>Description</TextAreaField>
                    <TextAreaField id='senses' className='row-span-2 bg-slate-700/60 rounded-md w-full p-2 flex flex-col' classNameLabel='pb-3 underline font-bold' classNameInput="text-black resize-none outline-none w-full h-full" formHook={register('senses', {
                        required:{
                            value:true,
                            message: 'senses is required'
                        }
                    })}>Senses</TextAreaField>
                    <TextAreaField id='lenguages' className='row-span-2 bg-slate-700/60 rounded-md w-full p-2 flex flex-col' classNameLabel='pb-3 underline font-bold' classNameInput="text-black resize-none outline-none w-full h-full" formHook={register('lenguages', {
                        required:{
                            value:true,
                            message: 'lenguages is required'
                        }
                    })}>Lenguages</TextAreaField>
                            <div className=' bg-slate-700/60 rounded-md w-full p-2'>
                                <h3  className='pb-3 underline font-bold'>Actions</h3>
                                <div className='grid grid-cols-2'>
                                    <h4>Name</h4>
                                    <h4 className='mb-3'> Description</h4>
                                    <ActionInput className='col-span-2 flex' index='1' register={register}/>
                                    <ActionInput className='col-span-2 flex' index='2' register={register}/>
                                    <ActionInput className='col-span-2 flex' index='3' register={register}/>
        
                                </div>
                            </div>
                    <div></div>
                    <CharacterStatsPanel register={register} className=' col-span-2  bg-slate-700/60 w-[170%] rounded-md grid grid-cols-6 py-2 px-6 gap-7'/>
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
                    )}</div>
                    <Button type='submmit' className='col-span-4 w-full h-auto rounded-md hover:scale-y-110 mb-[15vh] bg-gold1 text-black'> Save Npc</Button>
                </Form>
            </div>
        </div>
    )

}

export default NpcForm