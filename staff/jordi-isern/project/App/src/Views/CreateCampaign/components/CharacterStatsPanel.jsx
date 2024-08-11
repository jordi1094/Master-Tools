import DoubleInput from "./DoubleInput"

function CharacterStatsPanel({className , register}) {

    return (
        <div className={className}>
        <DoubleInput id1='strengthScore' id2='strengthModifier' type='number' placeholder1='Pt.' placeholder2='Mod.' className='flex flex-col items-center ' classNameInput='text-center text-black w-[2vw] placeholder:text-xs'formHook1={register('strengthScore',{
            required:{
                value:true,
                message: 'strength pt is required'
            },max:{
                value: 30,
                message: 'the strength pt can\'t be bigger than 30'
            } 
        })} formHook2={register('strengthModifier',{
            required:{
                value: true,
                message: 'the strength Modifier is necessary'
            }, max:{
                value: 10,
                message: ' the strength Modifier can\'t be bigger than 10'
            }, min: {
                value: -5,
                message: ' the strength Modifier can\'t be smaller than -5'
            }
        })}>Strength</DoubleInput>
        <DoubleInput id1='dexterityScore' id2='dexterityModifier' type='number' placeholder1='Pt.' placeholder2='Mod.' className='flex flex-col items-center' classNameInput='text-center  text-black w-[2vw] placeholder:text-xs' formHook1={register('dexterityScore',{
            required:{
                value:true,
                message: 'dexterity pt is required'
            },max:{
                value: 30,
                message: 'the dexterity pt can\'t be bigger than 30'
            } 
        })} formHook2={register('dexterityModifier',{
            required:{
                value: true,
                message: 'the dexterity Modifier is necessary'
            }, max:{
                value: 10,
                message: ' the dexterity Modifier can\'t be bigger than 10'
            }, min: {
                value: -5,
                message: ' the dexterity Modifier can\'t be smaller than -5'
            }
        })}>Dexterity</DoubleInput>
        <DoubleInput id1='constitutionScore' id2='constitutionModifier' type='number' placeholder1='Pt.' placeholder2='Mod.' className='flex flex-col items-center' classNameInput='text-center  text-black w-[2vw] placeholder:text-xs' formHook1={register('constitutionScore',{
            required:{
                value:true,
                message: 'constitution pt is required'
            },max:{
                value: 30,
                message: ' the constitution pt can\'t be bigger than 30'
            } 
        })} formHook2={register('constitutionModifier',{
            required:{
                value: true,
                message: 'the constitution Modifier is necessary'
            }, max:{
                value: 10,
                message: ' the constitution Modifier can\'t be bigger than 10'
            }, min: {
                value: -5,
                message: ' the constitution Modifier can\'t be smaller than -5'
            }
        })}>Constitution</DoubleInput>
        <DoubleInput id1='initiativeScore' id2='initiativeModifier' type='number' placeholder1='Pt.' placeholder2='Mod.' className='flex flex-col items-center' classNameInput='text-center  text-black w-[2vw] placeholder:text-xs' formHook1={register('initiativeScore',{
            required:{
                value:true,
                message: 'initiative pt is required'
            },max:{
                value: 30,
                message: ' the initiative pt can\'t be bigger than 30'
            } 
        })} formHook2={register('initiativeModifier',{
            required:{
                value: true,
                message: 'the initiative Modifier is necessary'
            }, max:{
                value: 10,
                message: ' the initiative Modifier can\'t be bigger than 10'
            }, min: {
                value: -5,
                message: ' the initiative Modifier can\'t be smaller than -5'
            }
        })}>Initiative</DoubleInput>
        <DoubleInput id1='wisdomScore' id2='wisdomModifier' type='number' placeholder1='Pt.' placeholder2='Mod.' className='flex flex-col items-center' classNameInput='text-center  text-black w-[2vw] placeholder:text-xs' formHook1={register('wisdomScore',{
            required:{
                value:true,
                message: 'wisdom pt is required'
            },max:{
                value: 30,
                message: ' the wisdom pt can\'t be bigger than 30'
            } 
        })} formHook2={register('wisdomModifier',{
            required:{
                value: true,
                message: 'the wisdom Modifier is necessary'
            }, max:{
                value: 10,
                message: ' the wisdom Modifier can\'t be bigger than 10'
            }, min: {
                value: -5,
                message: ' the wisdom modifier can\'t be smaller than -5'
            }
        })}>Wisdom</DoubleInput>
        <DoubleInput id1='charismaScore' id2='charismaModifier' type='number' placeholder1='Pt.' placeholder2='Mod.' className='flex flex-col items-center' classNameInput='text-center  text-black w-[2vw] placeholder:text-xs' formHook1={register('charismaScore',{
            required:{
                value:true,
                message: 'charisma pt is required'
            },max:{
                value: 30,
                message: ' the charisma pt can\'t be bigger than 30'
            } 
        })} formHook2={register('charismaModifier',{
            required:{
                value: true,
                message: 'the charisma Modifier is necessary'
            }, max:{
                value: 10,
                message: 'the charisma Modifier can\'t be bigger than 10'
            }, min: {
                value: -5,
                message: ' the charisma Modifier can\'t be smaller than -5'
            }
        })}>Charisma</DoubleInput>
        </div>
    )
}

export default CharacterStatsPanel