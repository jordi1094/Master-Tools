import Field from "../../../components/core/Field"

function CombatStats (className) {
    return (
        <div className=' col-span-2 row-span-2 bg-slate-700/60 w-full rounded-md grid grid-cols-4 p-2'>
            <Field id='ArmorClass' className='flex flex-col justify-center items-center'  classNameInput='w-[2vw] rounded-md text-black text-center'>Armor class</Field>
            <Field id='Iniciative' className="flex flex-col justify-center items-center" classNameInput='w-[2vw] rounded-md text-black text-center'>Iniciative</Field>
            <Field id='Speed' className="flex flex-col justify-center items-center" classNameInput='w-[2vw] rounded-md text-black text-center'>Speed</Field>
            <Field id='ProficiencyBonus<' className="flex flex-col justify-center text-center items-center" classNameInput='w-[2vw] rounded-md text-black text-center'>Proficiency Bonus</Field>
        </div>
    )
}

export default CombatStats