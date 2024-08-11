import Field from "../../../components/core/Field"


function CharacterInfoPanel({className, register}) {
    return(
        <div className={className}>
            <Field id='level' type='number' className='flex' classNameInput='w-10 rounded-md ml-2 mr-4 text-black text-center' formHook={register('level',{
                required:{
                    value: true,
                    message: 'level is required'
                }, max:{
                    value:20,
                    message:'lever can\'t be bigget than 20'
                }
            })}>Level</Field>
            <Field id='exp' type='number' className='flex' classNameInput="w-10 rounded-md ml-2 text-black text-center" formHook={register('exp',{
                required:{
                    value:true,
                    message: ' the EXP. ir required'
                }
            })}>EXP.</Field>
            <Field id='aligment' className='flex' classNameInput="w-full rounded-md ml-2 justify-end text-black text-center" formHook={register('aligment',{
                required:{
                    value: true,
                    message: 'the aligment is required'
                }
            })}>Aligment</Field>
            <Field id='classCharacter' className='flex' classNameInput="w-full rounded-md ml-2 justify-end text-black text-center" formHook={register('classCharacter',{
                required:{
                    value: true,
                    message: ' the class is required'
                }
            })}>Class</Field>
            <Field id='race' className='flex' classNameInput="w-full rounded-md ml-2 justify-end text-black text-center" formHook={register('race',{
                required:{
                    value: true,
                    message: 'the race is required'
                }
            })}>Race</Field>
            <Field id='background' className='flex' classNameInput="w-full rounded-md ml-2 justify-end text-black text-center" formHook={register('background',{
                required:{
                    value: true,
                    message: 'the background is required'
                }
            })}>Background</Field>
    </div>
    )
}

export default CharacterInfoPanel