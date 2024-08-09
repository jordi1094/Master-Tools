import Field from "../../../components/core/Field"

function CharacterInfoPanel({className}) {
    return(
        <div className={className}>
            <Field id='Level' className='flex' classNameInput='w-10 rounded-md ml-2 mr-4 text-black text-center'>Level</Field>
            <Field id='EXP.' className='flex' classNameInput="w-10 rounded-md ml-2 text-black text-center">EXP.</Field>
            <Field id='Aligment' className='flex' classNameInput="w-full rounded-md ml-2 justify-end text-black text-center">Aligment</Field>
            <Field id='Class' className='flex' classNameInput="w-full rounded-md ml-2 justify-end text-black text-center">Class</Field>
            <Field id='Race' className='flex' classNameInput="w-full rounded-md ml-2 justify-end text-black text-center">Race</Field>
            <Field id='Background' className='flex' classNameInput="w-full rounded-md ml-2 justify-end text-black text-center">Background</Field>
    </div>
    )
}

export default CharacterInfoPanel