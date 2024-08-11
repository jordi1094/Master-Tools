import{useForm} from 'react-hook-form'
import {ErrorMessage} from '@hookform/error-message'
import logic from '../../../../Logic/'
import Button from "../../../components/core/Button"
import Form from "../../../components/core/Form"
import Field from "../../../components/core/Field"
import CombatStats from "./CombatStats"
import CharacterInfoPanel from "./CharacterInfoPanel"
import CharacterStatsPanel from "./CharacterStatsPanel"
import DeathSavesPanel from "./DeathSavesPanel"
import HitPointsPanel from "./HitPointsPanel"
import SkillsPanel from "./SkillsPanel.jsx"
import TextAreaField from "../../../components/core/TextAreaField"
import EquipmentPanel from "./EquipmentPanel"
import CrossIcon from '../../../icons/cross-svgrepo-com.svg'
import Image from '../../../components/core/Image'
import React from "react"

function CharacterForm ({closeForm}){
    const {register, handleSubmit, formState:{errors}, reset} = useForm({
        validateCriteriaMode: "all"
      });

    const onSubmit = handleSubmit((data) => {
        try{
            logic.createCharacter(data)
                .then(() => closeForm)
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
                    <div></div>
                    <Button onClick={closeForm} className='bg-gold1 rounded-md h-7 w-7 flex justify-center items-center p-0 self-center justify-self-end'>
                        <Image src={CrossIcon} className='pointer-events-none h-6 m-0'/>
                    </Button>
            
                    

                    <CombatStats className=" col-span-2 row-span-2 bg-slate-700/60 w-full rounded-md grid grid-cols-4 p-2"/>
                    <CharacterInfoPanel register={register} className='col-span-2 row-span-2 bg-slate-700/60 w-full rounded-md p-2 grid grid-cols-3 gap-2 justify-start px-[1vw]' />
                    <div></div>
                    <CharacterStatsPanel register={register} className=' col-span-2 row-span-2 bg-slate-700/60 w-[130%] rounded-md grid grid-cols-6 py-2 px-6 gap-7'/>
                    <div className="col-span-3"></div>
                    <div></div>
                    <DeathSavesPanel className='bg-slate-700/60 rounded-md w-full p-2'/>
                    <HitPointsPanel className='bg-slate-700/60 rounded-md w-full p-2 flex flex-col  gap-2 ' register ={register}/>
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

                    <ErrorMessage errors={errors} name="multipleErrorInput">
                        {({ messages }) => {
                            console.log(messages);
                            return (
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                                <p key={type}>{message}</p>
                            ))
                            );
                        }}
                    </ErrorMessage>

                    <Button type='submmit' className='col-span-4 w-full h-auto rounded-md hover:scale-x-105 mb-[15vh] bg-gold1 text-black'> Save Character</Button>
                </Form>
            </div>
        </div>
    )

}

export default CharacterForm