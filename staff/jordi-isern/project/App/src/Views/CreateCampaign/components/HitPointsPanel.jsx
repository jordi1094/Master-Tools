import Field from "../../../components/core/Field"

function HitPointsPanel ({className, register}){
    return(
        <div className={className}>
            <h4 className="font-bold underline mb-2">Hit points</h4>
            <Field id='maxHitPoints' type='number' className=' flex gap-2 justify-between' classNameInput='w-[2vw] rounded-md text-black text-center' formHook={register('maxHitPoints',{
                required: {
                    value: true,
                    message: 'Max hit points is required'
                }
            })}>Max. hit points</Field>
            <Field id='currentHitPoints' className=' flex gap-2 justify-between' classNameInput='w-[2vw] rounded-md text-black text-center' formHook={register('currentHitPoints',{
                required: {
                    value: true,
                    message: 'Current hit points is required'
                }
            })}>Current hit points</Field>
            <Field id='temporalHitPoints' className=' flex gap-2 justify-between  pb-2 border-b-2 border-gold1' classNameInput='w-[2vw] rounded-md text-black text-center' formHook={register('temporalHitPoints',{
                required: {
                    value: true,
                    message: 'Temporal hit points is required'
                }
            })}>Temp. hit points</Field>
            <Field id='hitDice' className=' flex gap-2 justify-between h-full items-center' classNameInput='w-[5vw] rounded-md text-black text-center ' formHook={register('hitDice',{
                required:{
                    value: true,
                    message: 'Hit dice is required'
                }
            })}>Hit Dice</Field>
        </div>
    )
}

export default HitPointsPanel