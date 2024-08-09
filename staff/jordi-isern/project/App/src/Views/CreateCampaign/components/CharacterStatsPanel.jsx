import DoubleInput from "./DoubleInput"

function CharacterStatsPanel({className}) {
    return (
        <div className={className}>
        <DoubleInput id1='strengthScore' id2='strengthModifier' placeholder1='Pt.' placeholder2='Mod.' className='flex flex-col items-center ' classNameInput='text-center text-black w-[2vw] placeholder:text-xs'>Strength</DoubleInput>
        <DoubleInput id1='dexterityScore' id2='dexterityModifier' placeholder1='Pt.' placeholder2='Mod.' className='flex flex-col items-center' classNameInput='text-center  text-black w-[2vw] placeholder:text-xs'>Dexterity</DoubleInput>
        <DoubleInput id1='constitutionScore' id2='constitutionModifier' placeholder1='Pt.' placeholder2='Mod.' className='flex flex-col items-center' classNameInput='text-center  text-black w-[2vw] placeholder:text-xs'>Constitution</DoubleInput>
        <DoubleInput id1='iniciativeScore' id2='iniciativeModifier' placeholder1='Pt.' placeholder2='Mod.' className='flex flex-col items-center' classNameInput='text-center  text-black w-[2vw] placeholder:text-xs'>Iniciative</DoubleInput>
        <DoubleInput id1='wishdomScore' id2='wishdomModifier' placeholder1='Pt.' placeholder2='Mod.' className='flex flex-col items-center' classNameInput='text-center  text-black w-[2vw] placeholder:text-xs'>Wishdom</DoubleInput>
        <DoubleInput id1='charismaScore' id2='charismaModifier' placeholder1='Pt.' placeholder2='Mod.' className='flex flex-col items-center' classNameInput='text-center  text-black w-[2vw] placeholder:text-xs'>Charisma</DoubleInput>
        </div>
    )
}

export default CharacterStatsPanel