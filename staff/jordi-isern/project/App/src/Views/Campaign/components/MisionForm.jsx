import{useForm} from 'react-hook-form'
import Button from "../../../components/core/Button"
import Form from "../../../components/core/Form"
import Field from "../../../components/core/Field"
import Image from '../../../components/core/Image'
import CrossIcon from '../../../icons/cross-svgrepo-com.svg'
import React from "react"
import TextAreaField from '../../../components/core/TextAreaField'
import logic from '../../../logic'
import {toast} from 'sonner'

function MissionForm ({locationId, onClose}){
    const {register, handleSubmit, formState:{errors}} = useForm({
        shouldFocusError: false,
        validateCriteriaMode: "all"
    })
    
    const closeForm = () => {
        onClose()
    }

    const onSubmit= handleSubmit((missionData) => {
        try{
            missionData.startLocation = locationId
            const titles = missionData.checkList.split(',').map(title => title.trim())
            missionData.checkList = titles.map(title => ({
                task: title,
                status: false
            }))
            logic.createMission(missionData)
            .catch(error => toast.error(error.message))
            .then(() => onClose())

        }catch(error) {
            toast.error(error.message)
        }
    })

    return (
        <div className="fixed w-screen h-screen bg-[url('images/backgroundBlue.jpg')] bg-cover bg-center top-0 ">
            <div  className="absolute top-0 left-0 w-full h-full overflow-y-auto">
                <Form onSubmit={onSubmit} className='px-[7vw] pt-[5vh] grid grid-cols-4 grid-rows-[4vh] gap-2 justify-items-center'>
                <Field id='title' className="col-span-2 flex gap-2 h-auto w-full" classNameInput="rounded-md p-2 bg-white/70 w-full text-black font-bold focus:outline-none" autoComplete='off' formHook={register('title',{
                        required:{
                            value: true,
                            message: 'Title is required'
                        }, minLength:{
                            value: 2,
                            message: 'Title have to be longer than 2 caracters'
                        }
                    } )}>
                    <h5 className="text-3xl m-0">Title</h5>
                </Field>
                <div className="col-span-1"></div>
                <Button onClick={closeForm} className='bg-gold1 rounded-md h-7 w-7 flex justify-center items-center p-0 self-center justify-self-end'>
                        <Image src={CrossIcon} className='pointer-events-none h-6 m-0' />
                    </Button>
                <TextAreaField id='background' className=' bg-slate-700/60 col-span-2 rounded-md w-full p-2 flex flex-col' classNameLabel='pb-3 underline font-bold' classNameInput="text-black resize-none outline-none w-full h-[15vh]" formHook={register('background', {
                        required:{
                            value:true,
                            message: 'Background is required'
                        }
                    })}>background</TextAreaField>
                
                <TextAreaField id='objective' className=' bg-slate-700/60 col-span-2 rounded-md w-full p-2 flex flex-col' classNameLabel='pb-3 underline font-bold' classNameInput="text-black resize-none outline-none w-full h-[15vh]" formHook={register('objective', {
                        required:{
                            value:true,
                            message: 'Objective is required'
                        }
                    })}>Objective</TextAreaField>
                <TextAreaField id='checkList' placeholder='"Separate the secondary objectives with commas (,). For example: Investigate the mysterious ruins , Retrieve the stolen artifact ... ' className=' bg-slate-700/60 col-span-2 rounded-md w-full p-2 flex flex-col' classNameLabel='pb-3 underline font-bold' classNameInput="text-black resize-none outline-none w-full h-[15vh]" formHook={register('checkList')}>CheckList</TextAreaField>
                <Button type='submmit' className='col-span-4 w-full h-auto rounded-md hover:scale-y-110 mb-[15vh] bg-gold1 text-black'> Save mission</Button>
                </Form>
            </div>
        </div>
    )
}

export default MissionForm