import Field from "../../../components/core/Field"
import TextAreaField from "../../../components/core/TextAreaField"

function EquipmentPanel({className, register}) {
    return(
        <div className={`${className} grid grid-cols-2 gap-4`}>
            <div className=" w-full p-2 grid gap-2">
                <h4 className="underline font-bold">Money</h4>
                <Field id='cooper' type='number' className='flex  justify-between' classNameInput='ml-2 rounded-md w-[3vw] text-black' formHook={register('cooper', {
                    required:{
                        value: true,
                        message: 'Money cooper is required'
                    }
                })}>Copper</Field>

                <Field id='silver' type='number' className='flex  justify-between' classNameInput='ml-2 rounded-md w-[3vw] text-black' formHook={register('silver', {
                    required:{
                        value: true,
                        message: 'Money silver is required'
                    }
                })}>Silver</Field>
                <Field id='electrum' type='number' className='flex  justify-between' classNameInput='ml-2 rounded-md w-[3vw] text-black' formHook={register('electrum', {
                    required:{
                        value: true,
                        message: 'Money electrum is required'
                    }
                })}>Electrum</Field>
                <Field id='gold' type='number' className='flex  justify-between' classNameInput='ml-2 rounded-md w-[3vw] text-black'  formHook={register('gold', {
                    required:{
                        value: true,
                        message: 'Money gold is required'
                    }
                })}>Gold</Field>
                <Field id='platinium' type='number' className='flex  justify-between' classNameInput='ml-2 rounded-md w-[3vw] text-black' formHook={register('platinium', {
                    required:{
                        value: true,
                        message: 'Money platinium is required'
                    }
                })}>Platinium</Field>

            </div>
            <div className="p-2">
                <h4 className="underline mb-2 font-bold">Equipment</h4>
                <TextAreaField id='equipment' classNameInput=' w-full h-[15vh] resize-none outline-none text-black' formHook={register('equipment')}></TextAreaField>
            </div>
        </div>
    )
}

export default EquipmentPanel
