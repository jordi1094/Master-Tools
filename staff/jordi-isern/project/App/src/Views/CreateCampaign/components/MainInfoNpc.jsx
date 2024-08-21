import Field from "../../../components/core/Field";

function MainInfoNpc({register, className}){

    return (<div className={className}>
            <div className="grid grid-cols-3 grid-rows-2  gap-2">
                <Field id='race' className='grid grid-cols-2 justify-self-start' classNameInput="w-full rounded-md text-black text-center h-6" formHook={register('race',{
                required:{
                    value: true,
                    message: 'the race is required'
                }
                 })}>Race</Field>
                <Field id='alignment' className='grid grid-cols-2 justify-self-start' classNameInput="w-full rounded-md justify-end text-black h-6 text-center" formHook={register('alignment',{
                required:{
                    value: true,
                    message: 'the aligment is required'
                }
                })}>Aligment</Field>
            <Field id='armorClass' type='number' className='grid grid-cols-2 justify-self-start'  classNameInput='w-full rounded-md  text-black h-6 text-center' formHook={register('armorClass',{
                required:{
                    value: true,
                    message: 'armorClass is required'
                },max:{
                    value: 40,
                    message: 'the armor Class can\'t be bigger than 40'
                },min:{
                    value:0,
                    message:'the armor class can\'t be lower than 0'
                }
                
            })}>Armor class</Field>
            <Field id='challengeRating' type='number' className='grid grid-cols-2 justify-self-start' classNameInput="w-full rounded-md justify-end h-6 text-black text-center" formHook={register('challengeRating',{
            required:{
                value: true,
                message: 'the challenge rating is required'
            }
            })}>Challenge rating</Field>
            <Field id='speed' type='number' className='grid grid-cols-2 justify-self-start' classNameInput="w-full rounded-md justify-end text-black h-6 text-center" formHook={register('speed',{
                required:{
                    value:true,
                    message: 'The speed is required'
                }
            })}>Speed</Field>
                <div className="flex">
                    <Field id='skillName'className='grid grid-cols-2 justify-self-start w-full'  placeholder='name' classNameInput="w-[10vw] rounded-md justify-end text-black h-6 text-center  placeholder:text-xs" formHook={register('skillName',{
                        required:{
                            value:true,
                            message: 'The Skill name is required'
                        }
                    })}>Skill</Field>
                    <Field id='skillModifier' type='number' className='grid grid-cols-2 justify-self-start' placeholder='modifier' classNameInput="w-full rounded-md h-6 justify-end text-black text-center  placeholder:text-xs" formHook={register('skillModifier',{
                        required:{
                            value:true,
                            message: 'The skill modifier is required'
                        }
                    })}></Field>
                </div>
            </div>
        </div>
    )
}

export default MainInfoNpc