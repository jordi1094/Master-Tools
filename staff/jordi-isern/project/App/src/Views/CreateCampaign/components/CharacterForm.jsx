import Button from "../../../components/core/Button"
import Form from "../../../components/core/Form"

function CharacterForm ({closeForm}){
    console.info('form open')
    return (
        <div className="w-screen h-screen bg-[url(../../public/images/backgroundBlue.jpg)] bg-cover bg-center absolute top-0 " >
            <Form className='p-11 grid grid-cols-3 gap-2 justify-items-center'>
                <div className="flex gap-3 row-span-2 items-center">
                    <label htmlFor="Name" className="text-3xl"> Name</label>
                    <input name="Name" id="Name" className="rounded-md text-black h-[4vh]"></input>
                </div>
                <div className="flex justify-around gap-3">
                    <label htmlFor="Race">Race</label>
                    <input name="Race" id="Race" className="rounded-md text-black w-[17vw]"></input>
                </div>
                <div className="flex row-auto gap-3">
                    <div className="flex gap-1">
                        <label htmlFor="Level">Level</label>
                        <input name="Level" id="Level" className="rounded-md text-black w-[5vw]"></input>
                    </div>    
                    <div className="flex gap-1">
                        <label htmlFor="Exp">Exp</label>
                        <input name="Exp" id="Exp" className="rounded-md text-black w-[5vw]"></input>
                    </div>    
                </div>
                <div className="flex justify-around gap-3">
                    <label htmlFor="Class">Class</label>
                    <input name="Class" id="Class" className="rounded-md text-black w-[17vw]"></input>
                </div>
                <div className="flex row-auto gap-3">
                    <div className="flex gap-1">
                        <label htmlFor="Speed">Speed</label>
                        <input name="Speed" id="Speed" className="rounded-md text-black w-[5vw]"></input>
                    </div>    
                    <div className="flex gap-1">
                        <label htmlFor="iniciative">iniciative</label>
                        <input name="iniciative" id="iniciative" className="rounded-md text-black w-[5vw]"></input>
                    </div>    
                </div>
                <div className="flex row-span-1 gap-3">
                    <div className="flex gap-1">
                        <label htmlFor="ArmorClass">Armor Class</label>
                        <input name="ArmorClass" id="ArmorClass" className="rounded-md text-black w-[3vw]"></input>
                    </div>    
                    <div className="flex gap-1">
                        <label htmlFor="inpiration">inpiration</label>
                        <input name="inpiration" id="inpiration" type="checkbox" className=" text-black w-[5vw]"></input>
                    </div>    
                </div>
                <div className="row-span-2">
                    <h7 className='block text-center'>Strencth</h7>
                    <label htmlFor="StrengthScore">Score</label>
                    <input name="StrengthScore" id="StrengthScore" className="text-black w-[2vw] rounded-md m-2"></input>
                    <label htmlFor="StrengthModifies">Modifier</label>
                    <input name="StrengthModifies" id="StrengthModifies" className="text-black w-[2vw] rounded-md m-2"></input>
                </div>
                <div className="row-span-2">
                    <h7 className='block text-center'>Dexterity</h7>
                    <label htmlFor="DexterityScore">Score</label>
                    <input name="DexterityScore" id="DexterityScore" className="text-black w-[2vw] rounded-md m-2"></input>
                    <label htmlFor="DexterityModifies">Modifier</label>
                    <input name="DexterityModifies" id="DexterityModifies" className="text-black w-[2vw] rounded-md m-2"></input>
                </div>
                <div className="row-span-4 flex flex-col">
                    <h7>rasgos de personaliodad</h7>
                    <textarea></textarea>
                </div>
                <div className="row-span-2">
                    <h7 className='block text-center'>Constitution</h7>
                    <label htmlFor="ConstitutionScore">Score</label>
                    <input name="ConstitutionScore" id="ConstitutionScore" className="text-black w-[2vw] rounded-md m-2"></input>
                    <label htmlFor="DexterityModifies">Modifier</label>
                    <input name="DexterityModifies" id="DexterityModifies" className="text-black w-[2vw] rounded-md m-2"></input>
                </div>
            </Form>
        </div>
    )

}

export default CharacterForm