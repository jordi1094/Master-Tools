import { useState } from 'react'
import View from '../../components/Library/View'
import Form from '../../components/core/Form'
import Field from '../../components/core/Field'
import Button from '../../components/core/Button'
import CharacterForm from './components/CharacterForm'

function CreateCampaign() {

    const [createCharacter, setCharaterFromState] = useState(false)
    const onClickAdd = (event) => {
        setCharaterFromState(true)}
    const onClickSaveAndCancel = () => setCharaterFromState(false)



    return(
        <View className= 'bg-[url(../../public/images/backgroundBlue.jpg)]  bg-cover bg-center h-screen flex flex-col items-center pt-[10vh]'>
            <h1>Create Campaign</h1>
            <Form classname='flex flex-col gap-4 px-[10vw] py-[2vh] w-[70vw]' >
                <div className='flex'>
                    
                    <label for='title'>
                        <h5   className='text-xl mr-3'>Title</h5>
                    </label>
                    <input className='w-full h-[3vh] rounded-md bg-white/50 text-black'></input>
                </div>
                <div className='w-[70vw] drop-shadow-sm'>
                    <label for= 'background'>
                        <h5  className='mb-2 text-xl '>Background</h5>
                    </label>
                    <textarea name='background' defaultValue='Write here!'  autoComplete='off' autoCapitalize='sentences' className='h-[10vh] bg-white/50 text-black resize-none outline-none w-full'></textarea>
                </div>
                <div className='w-[70vw]'>
                    <label for='objective'>
                        <h5 className='mb-2 text-xl '>Objective</h5>
                    </label>
                    <textarea name='objective' defaultValue='Write here!'  autoComplete='off' autoCapitalize='sentences' className='h-[10vh] bg-white/50 text-black resize-none outline-none w-full'></textarea>
                </div>
                <div>
                    <div className='flex justify-between mt-5 align-middle'>
                        <h5 className='mb-2 text-xl drop-shadow-sm'>Characters</h5>
                        <Button onClick={onClickAdd} type='button' className=' bg-gold1 rounded-md w-auto px-2 hover:scale-105 active:scale-100 text-black text-sm h-5' >Add Character</Button>
                        {/* TODO añadir listado de characters */}
                    </div>
                </div>
                <div className='flex justify-center mt-6'>
                    <Button type = 'submit' className='bg-gold1 rounded-md h-[4vh] w-full px-3 hover:scale-105 active:scale-100  text-black text-l'>Create Campaign</Button>
                </div>
            </Form>
            {createCharacter && <CharacterForm closeForm ={ onClickSaveAndCancel}/>}

        </View>
    )
}

export default CreateCampaign