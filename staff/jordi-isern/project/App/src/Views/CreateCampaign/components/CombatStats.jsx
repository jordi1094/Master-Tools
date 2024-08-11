import {useForm} from 'react-hook-form'
import Field from "../../../components/core/Field"

function CombatStats (className) {

    const {register} = useForm()
    return (
        <div className=' col-span-2 row-span-2 bg-slate-700/60 w-full rounded-md grid grid-cols-4 p-2'>
            <Field id='armorClass' type='number' className='flex flex-col justify-center items-center'  classNameInput='w-[2vw] rounded-md text-black text-center' formHook={register('armorClass',{
                required:{
                    value: true,
                    message: 'armorClass is required'
                },max:{
                    value: 40,
                    message: 'the armor Class can\'t be bigger than 40'
                }
                
            })}>Armor class</Field>
            <Field id='iniciative' type='number' className="flex flex-col justify-center items-center" classNameInput='w-[2vw] rounded-md text-black text-center'formHook={register('iniciativa',{
                required:{
                    value: true,
                    message: 'armorClass is required'
                },max:{
                    value: 25,
                    message: 'the armor Class can\'t be bigger than 25'
                }
            })}>Iniciative</Field>
            <Field id='speed' type='number' className="flex flex-col justify-center items-center" classNameInput='w-[2vw] rounded-md text-black text-center' formHook={register('speed',{
                required:{
                    value:true,
                    message: 'The speed is required'
                }
            })}>Speed</Field>
            <Field id='proficiencyBonus' type='number' className="flex flex-col justify-center text-center items-center" classNameInput='w-[2vw] rounded-md text-black text-center' formHook={register('proficiencyBonus',{
                required:{
                    value: true,
                    message:' proficiency Bonus is required'
                },max:{
                    value:6,
                    message:'proficiency Bonus can\t be bigger thans 6'
                }
            })}>Proficiency Bonus</Field>
        </div>
    )
}

export default CombatStats