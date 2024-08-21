import Field from "../../../components/core/Field"

function SkillsPanel({ className, register }) {
    return (
        <div className={className}>
            <h4 className="font-bold underline mb-2">Skills</h4>
            <div className="grid grid-cols-3 grid-flow-row gap-2 gap-x-32">
                <Field id='acrobatics' type='number' className='flex gap-2 justify-between' classNameInput='rounded-md w-[3vw] text-black text-center' formHook={register('acrobatics', {
                    required: {
                        value: true,
                        message: 'Skill acrobatic is required'
                    }
                })}>Acrobatics</Field>

                <Field id='animalHandling' type='number' className='flex gap-2 justify-between' classNameInput='rounded-md w-[3vw] text-black text-center' formHook={register('animalHandling', {
                    required: {
                        value: true,
                        message: 'Skill animal handling is required'
                    }
                })}>AnimalHandling
                </Field>

                <Field id='arcana' type='number' className='flex gap-2 justify-between' classNameInput='rounded-md w-[3vw] text-black text-center' formHook={register('arcana', {
                    required: {
                        value: true,
                        message: 'Skill arcana is required'
                    }
                })}>Arcana</Field>

                <Field id='athletics' type='number' className='flex gap-2 justify-between' classNameInput='rounded-md w-[3vw] text-black text-center' formHook={register('athletics', {
                    required: {
                        value: true,
                        message: 'Skill athletics is required'
                    }
                })}>Athletics</Field>

                <Field id='deception' type='number' className='flex gap-2 justify-between' classNameInput='rounded-md w-[3vw] text-black text-center' formHook={register('deception', {
                    required: {
                        value: true,
                        message: 'Skill deception is required'
                    }
                })}>Deception</Field>

                <Field id='history' type='number' className='flex gap-2 justify-between' classNameInput='rounded-md w-[3vw] text-black text-center' formHook={register('history', {
                    required: {
                        value: true,
                        message: 'Skill history is required'
                    }
                })}>History</Field>

                <Field id='insight' type='number' className='flex gap-2 justify-between' classNameInput='rounded-md w-[3vw] text-black text-center' formHook={register('insight', {
                    required: {
                        value: true,
                        message: 'Skill insight is required'
                    }
                })}>Insight</Field>

                <Field id='intimidation' type='number' className='flex gap-2 justify-between' classNameInput='rounded-md w-[3vw] text-black text-center' formHook={register('intimidation', {
                    required: {
                        value: true,
                        message: 'Skill intimidation is required'
                    }
                })}>Intimidation</Field>

                <Field id='investigation' type='number' className='flex gap-2 justify-between' classNameInput='rounded-md w-[3vw] text-black text-center' formHook={register('investigation', {
                    required: {
                        value: true,
                        message: 'Skill investigation is required'
                    }
                })}>Investigation</Field>

                <Field id='medicine' type='number' className='flex gap-2 justify-between' classNameInput='rounded-md w-[3vw] text-black text-center' formHook={register('medicine', {
                    required: {
                        value: true,
                        message: 'Skill medicine is required'
                    }
                })}>Medicine</Field>

                <Field id='nature' type='number' className='flex gap-2 justify-between' classNameInput='rounded-md w-[3vw] text-black text-center' formHook={register('nature', {
                    required: {
                        value: true,
                        message: 'Skill nature is required'
                    }
                })}>Nature</Field>

                <Field id='perception' type='number' className='flex gap-2 justify-between' classNameInput='rounded-md w-[3vw] text-black text-center' formHook={register('perception', {
                    required:{
                        value: true,
                        message: 'Skill perception is required'
                    }
                })}>Perception</Field>

                <Field id='performance' type='number' className='flex gap-2 justify-between' classNameInput='rounded-md w-[3vw] text-black text-center' formHook={register('performance', {
                    required:{
                        value: true,
                        message: 'Skill performance is required'
                    }
                })}>Performance</Field>

                <Field id='persuasion' type='number' className='flex gap-2 justify-between' classNameInput='rounded-md w-[3vw] text-black text-center' formHook={register('persuasion', {
                    required:{
                        value: true,
                        message: 'Skill persuasion is required'
                    }
                })}>Persuasion</Field>

                <Field id='religion' type='number' className='flex gap-2 justify-between' classNameInput='rounded-md w-[3vw] text-black text-center' formHook={register('religion', {
                    required:{
                        value: true,
                        message: 'Skill religion is required'
                    }
                })}>Religion</Field>

                <Field id='sleightOfHand' type='number' className='flex gap-2 justify-between' classNameInput='rounded-md w-[3vw] text-black text-center'  formHook={register('sleightOfHand', {
                    required:{
                        value: true,
                        message: 'Skill sleight of hand is required'
                    }
                })}>Sleight of hand</Field>

                <Field id='stealth' type='number' className='flex gap-2 justify-between' classNameInput='rounded-md w-[3vw] text-black text-center' formHook={register('stealth', {
                    required:{
                        value: true,
                        message: 'Skill stealth is required'
                    }
                })}>Stealth</Field>

                <Field id='survival' type='number' className='flex gap-2 justify-between' classNameInput='rounded-md w-[3vw] text-black text-center' formHook={register('survival', {
                    required:{
                        value: true,
                        message: 'Skill survival is required'
                    }
                })}>Survival</Field>
            </div>
        </div>
    )
}
export default SkillsPanel