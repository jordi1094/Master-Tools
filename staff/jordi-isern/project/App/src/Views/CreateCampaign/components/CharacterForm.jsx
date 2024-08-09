import Button from "../../../components/core/Button"
import Form from "../../../components/core/Form"
import Field from "../../../components/core/Field"
import CombatStats from "./CombatStats"
import CharacterInfoPanel from "./CharacterInfoPanel"
import CharacterStatsPanel from "./CharacterStatsPanel"
import DeathSavesPanel from "./DeathSavesPanel"

function CharacterForm ({closeForm}){
    console.info('form open')
    return (
        <div className="w-screen h-screen bg-[url(../../public/images/backgroundBlue.jpg)] bg-cover bg-center absolute top-0 " >
            <Form className='px-[7vw] pt-[5vh] grid grid-cols-4 grid-rows-[4vh] gap-2 justify-items-center'>
                <Field id='name' className="col-span-2 flex gap-2 h-auto w-full" classNameInput="rounded-md p-2 bg-white/70 w-full text-black font-bold">
                    <h2 className="text-3xl m-0">Name</h2>
                </Field>
        
                <div className=" col-span-2"></div>

                <CombatStats className=" col-span-2 row-span-2 bg-slate-700/60 w-full rounded-md grid grid-cols-4 p-2"/>
                <CharacterInfoPanel className='col-span-2 row-span-2 bg-slate-700/60 w-full rounded-md p-2 grid grid-cols-3 gap-2 justify-start px-[1vw]' />
                <div></div>
                <CharacterStatsPanel className=' col-span-2 row-span-2 bg-slate-700/60 w-[130%] rounded-md grid grid-cols-6 py-2 px-6 gap-7'/>
                <div></div>
                <div></div>
                <div></div>
                <DeathSavesPanel className='bg-slate-700/60 rounded-md w-auto p-2'/>

            </Form>
        </div>
    )

}

export default CharacterForm