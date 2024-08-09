import Field from "../../../components/core/Field"


function DeathSavesPanel ({className}) {
    return(
    <div className={className}>
        <h4 className="font-bold underline mb-2">Death Saves</h4>
        <div className="grid grid-cols-2 gap-2 gap-x-24 border-b-2 mx-4 pb-2 border-gold1">
            <Field id='strengthDeathSave' className='flex justify-between' classNameInput='w-[2vw] ml-1 rounded-md'>Strength</Field>
            <Field id='dexterityDeathSave' className='flex justify-between' classNameInput='w-[2vw] ml-1 rounded-md'>Dexterity</Field>
            <Field id='constitutionDeathSave' className='flex justify-between' classNameInput='w-[2vw] ml-1 rounded-md'>Constitution</Field>
            <Field id='iniciativeDeathSave' className='flex justify-between' classNameInput='w-[2vw] ml-1 rounded-md'>Iniciative</Field>
            <Field id='wishdomDeathSave' className='flex justify-between' classNameInput='w-[2vw] ml-1 rounded-md'>Wishdom</Field>
            <Field id='charismaDeathSave' className='flex justify-between' classNameInput='w-[2vw] ml-1 rounded-md'>Charisma</Field>
        </div>
        <div className=" flex flex-col gap-2 mt-2 ">
            <Field id='deathSavesSucceses' placeholder='1, 2, or 3' className='grid grid-cols-2 ' classNameInput='w-[3vw] rounded-md text-center placeholder:text-xs'>Death saves succeses</Field>
            <Field id='deathSavesFailures' placeholder='1, 2, or 3' className='grid grid-cols-2 ' classNameInput='w-[3vw] rounded-md text-center placeholder:text-xs'>Death saves failures</Field>
        </div>
    </div>
    )
}

export default DeathSavesPanel