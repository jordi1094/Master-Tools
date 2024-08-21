import { useForm } from "react-hook-form";
import Field from "../../../components/core/Field";
import Button from "../../../components/core/Button";
import Form from "../../../components/core/Form";
import Image from "../../../components/core/Image";
import CrossIcon from '../../../icons/cross-svgrepo-com.svg'
import TextAreaField from "../../../components/core/TextAreaField";
import { useState } from "react";
import NpcResume from "./NpcResume";
import NpcForm from "../../CreateNpc";
import logic from "../../../logic";
import EnemiesSearch from "../../../components/Library/EnemiesSearch";

function LocationForm({ closeForm, onLocationCreated }) {
    const [npcList, setNpc] = useState([])
    const [npcIDList, setNpcID] = useState([])

    const [enemiesList, setEnemy] = useState([])
    const [enemiesIndexList, setEnemiesIndex] = useState([])
    

    const [createNpc, setNpcFormState] = useState(false)
    const onClickAddNpc = () => { setNpcFormState(true) }
    const onClickCloseNpcForm = () => { setNpcFormState(false) }


    const { register, handleSubmit, formState:{errors} } = useForm({
        shouldFocusError: false,
        validateCriteriaMode: 'all'
    })
    const onNpcCreated = npc => {
        setNpcFormState(false)
        setNpc(prevNpcs => [...prevNpcs, npc])
        setNpcID(prevNpcId => [...prevNpcId, npc._id])
    }


    const onSubmit = handleSubmit((locationData) => {
        try {
            logic.cretaLocation(locationData)
                .then((location) => {
                    onLocationCreated(location)
                })
        } catch (error) {
            console.error(error)
        }
    })

    const onAddEnemy = (enemy) => {
        setEnemy(prevEnemies => [...prevEnemies, enemy.name])
        setEnemiesIndex(prevEnemiesIndex => [...prevEnemiesIndex, enemy.index])
    }


    return (
        <div className="fixed w-screen h-screen bg-[url(../../public/images/backgroundBlue.jpg)] bg-cover bg-center top-0 " >
            <div className="absolute top-0 left-0 w-full h-full overflow-y-auto">
                <Form onSubmit={onSubmit} className='px-[7vw] pt-[5vh] grid grid-cols-4 grid-rows-[4vh] gap-2 justify-items-center'>
                    <Field id='name' className="col-span-2 flex gap-2 h-auto w-full" classNameInput="rounded-md p-2 bg-white/70 w-full text-black font-bold" formHook={register('name', {
                        required: {
                            value: true,
                            message: 'Name is required'
                        }, minLength: {
                            value: 2,
                            message: 'Name have to be longer than 2 caracters'
                        }
                    })}>
                        <h2 className="text-3xl m-0">Location</h2>
                    </Field>
                    <div className="col-span-1"></div>
                    <Button onClick={closeForm} className='bg-gold1 rounded-md h-7 w-7 flex justify-center items-center p-0 self-center justify-self-end'>
                        <Image src={CrossIcon} className='pointer-events-none h-6 m-0' />
                    </Button>

                    <TextAreaField id='description' className=' col-span-3 bg-slate-700/60 rounded-md w-full p-2 flex flex-col' classNameLabel='pb-3 underline font-bold' classNameInput="text-black resize-none outline-none w-full h-[15vh]" formHook={register('description',{
                        required:{
                            value:true,
                            message: 'description is required'
                        }
                    })}>Description</TextAreaField>
                    <TextAreaField id='objects' placeholder='separate the objects with ",".   For example: potion, long sword, bag of holding, gold coins,. ' className='bg-slate-700/60 rounded-md w-full p-2 flex flex-col' classNameLabel='pb-3 underline font-bold' classNameInput="text-black resize-none outline-none w-full h-[15vh]" formHook={register('objects')}>Objects</TextAreaField>
                    <div className='w-full mt-5 align-middle col-span-4'>
                        <h5 className='mb-2 text-xl drop-shadow-sm'>Npcs</h5>
                        <Button onClick={onClickAddNpc} type='button' className=' bg-gold1 rounded-md w-auto px-2 hover:scale-105 active:scale-100 text-black text-sm h-5' >Add Npc</Button>
                    </div>
                    {npcList.length > 0 && <div className='bg-white/50 rounded-md p-1 mt-2 w-full col-span-4'>
                        <div className='grid grid-cols-3 border-b-2 border-black/40'>
                            <h3 className='text-black font-bold text-center'>Name</h3>
                            <h3 className='text-black font-bold text-center'>Raze</h3>
                            <h3 className='text-black font-bold text-center'>aligment</h3>
                        </div>
                        {npcList.map((npc, index) => <NpcResume key={index} name={npc.name} race={npc.race} aligment={npc.alignment} />)}
                    </div>}
                    <div className='justify-between mt-5 align-middle col-span-4 w-full'>
                        <h5 className='mb-2 text-xl drop-shadow-sm'>Enemies</h5>
                        {enemiesList.length > 0 && <ul className="mb-2">
                            {enemiesList.map((enemy, index) => <li className="bg-white/50 px-2 text-black" key={index}>- {enemy}</li>)}
                            </ul>}
                        <EnemiesSearch onAddEnemy={onAddEnemy}/>
                        </div>

                    <div className=' col-span-4 w-full'>
                        {Object.keys(errors).length > 0 && (
                            <div className=' bg-red-50 rounded-md w-full px-3 py-2'>
                                <h3 className='text-red-900 font-bold'>Errors:</h3>
                                <ul className='grid grid-cols-3 gap-x-5'>
                                    {Object.values(errors).map((error, index) => {
                                        return (<li key={index} className='text-red-600'>- {error.message}</li>
                                        )})}
                                </ul>
                            </div>
                        )}
                    </div>
                    <Button type='submmit' className='col-span-4 w-full h-auto rounded-md hover:scale-y-110 mb-[15vh] bg-gold1 text-black'> Save location</Button>

                </Form>
                {createNpc && <NpcForm closeForm={onClickCloseNpcForm} onNpcCreated={onNpcCreated} />}
            </div>
        </div>
    )
}

export default LocationForm