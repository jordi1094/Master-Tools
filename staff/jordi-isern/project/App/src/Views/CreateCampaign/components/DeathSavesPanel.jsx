import {useForm} from 'react-hook-form'
import Field from "../../../components/core/Field"


function DeathSavesPanel ({className}) {
    const {register} = useForm()

    return(
    <div className={className}>
        <h4 className="font-bold underline mb-2">Death Saves</h4>
        <div className="grid grid-cols-2 gap-2 gap-x-24 border-b-2 mx-4 pb-2 border-gold1">
            <Field id='strengthDeathSave' type='number' className='flex justify-between' classNameInput='w-[2vw] ml-1 rounded-md text-black text-center' formHook={register('strengthDeathSave',{
                required:{
                    value: true,
                    message: 'the Strength in death death saves is required'
                }
            })}>Strength</Field>
            <Field id='dexterityDeathSave' type='number' className='flex justify-between' classNameInput='w-[2vw] ml-1 rounded-md text-black text-center' formHook={register('dexterityDeathSave',{
                required:{
                    value: true,
                    message: 'the dexterity in death death saves is required'
                }
            })}>Dexterity</Field>
            <Field id='constitutionDeathSave' type='number' className='flex justify-between' classNameInput='w-[2vw] ml-1 rounded-md text-black text-center' formHook={register('constitutionDeathSave',{
                required:{
                    value: true,
                    message: 'the constitution in death death saves is required'
                }
            })}>Constitution</Field>
            <Field id='iniciativeDeathSave' type='number' className='flex justify-between' classNameInput='w-[2vw] ml-1 rounded-md text-black text-center' formHook={register('iniciativeDeathSave',{
                required:{
                    value: true,
                    message: 'the iniciative in death death saves is required'
                }
            })}>Iniciative</Field>
            <Field id='wishdomDeathSave' type='number' className='flex justify-between' classNameInput='w-[2vw] ml-1 rounded-md text-black text-center' formHook={register('wishdomDeathSave',{
                required:{
                    value: true,
                    message: 'the wishdom in death death saves is required'
                }
            })}>Wishdom</Field>
            <Field id='charismaDeathSave' className='flex justify-between' classNameInput='w-[2vw] ml-1 rounded-md text-black text-center'>Charisma</Field>
        </div>
        <div className=" flex flex-col gap-2 mt-5 justify-center ">
            <Field id='deathSavesSucceses'type='number' placeholder='0, 1, 2,or 3' className='grid grid-cols-2 ' classNameInput='w-[3.2vw] rounded-md text-center placeholder:text-xs text-black' formHook={register('deathSavesSucceses',{
                required:{
                    value: true,
                    message: 'the death saves succeses in death death saves is required'
                },max:{
                    value: 3,
                    message: ' The death saves succes is bigger than 3'
                }, min:{
                    value:0,
                    message: 'The death saves succeses is lower than 0'
                }
            })}>Death saves succeses</Field>
            <Field id='deathSavesFailures' type='number' placeholder='0, 1, 2,or 3' className='grid grid-cols-2 ' classNameInput='w-[3.2vw] rounded-md text-center placeholder:text-xs text-black' formHook={register('deathSavesFailures',{
                required:{
                    value: true,
                    message: 'the death saves failures in death death saves is required'
                },max:{
                    value: 3,
                    message: ' The death saves failures is bigger than 3'
                }, min:{
                    value:0,
                    message: 'The death saves failures is lower than 0'
                }
            })}>Death saves failures</Field>
        </div>
    </div>
    )
}

export default DeathSavesPanel