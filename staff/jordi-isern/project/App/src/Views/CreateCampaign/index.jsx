import { useState, useEffect} from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import View from '../../components/Library/View'
import Form from '../../components/core/Form'
import TextAreaField from '../../components/core/TextAreaField'
import Button from '../../components/core/Button'
import Image from '../../components/core/Image'
import CharacterForm from '../CreateCharacter'
import CharacterResume from './components/CharacterResume'
import LocationForm from './components/LocationForm'
import Field from '../../components/core/Field'
import CrossIcon from '../../icons/cross-svgrepo-com.svg'
import logic from '../../logic'


function CreateCampaign() {
    const {register, handleSubmit, formState:{errors}} = useForm({
        shouldFocusError: false,
        validateCriteriaMode: "all"
    })
    const [campaign, setCampaign] = useState('')

    const {id} = useParams()

    useEffect(()=> {
        logic.getCampaign(id)
            .then(campaign => {
                setCampaign(campaign)
            })},[])

    const navigate = useNavigate()

    const onClickClose = () => navigate('/home')

    const [charactersList, setCharacters] = useState([])

    const [characterIDList, setCharactersID] = useState([])

    const [createCharacter, setCharaterFormState] = useState(false)

    const onClickAddCharacter = () => {setCharaterFormState(true)}
    const onClickSaveAndCancelCharacter = () => setCharaterFormState(false)

    const onClickAddLocation = (event) => {
        event.preventDefault()

        logic.createLocation()
        .then(location => navigate(`/createCampaign/${id}/location/${location._id.toString()}`))
    }

    const onCharacterCreated = (character) => {
        setCharaterFormState(false)
        setCharacters(prevCharacters => [...prevCharacters, character])
        setCharactersID(prevCharactersId => [...prevCharactersId, character._id])
    }

    
    const onSubmit = handleSubmit((campaingData) => {
        logic.saveCampaing(campaingData, characterIDList)
    })

    return(
        <View className= 'bg-[url(../../public/images/backgroundBlue.jpg)] fixed bg-cover bg-center h-screen w-screen '>
            <div className='aboslute top-0 w-full h-full overflow-y-auto  flex flex-col items-center '>
                <div className="flex items-center w-full">
                    <h1 className="text-center flex-grow">Create Campaign</h1>
                    <Button onClick={onClickClose} className='bg-gold1 rounded-md h-7 w-7 flex justify-center items-center p-0 ml-auto mr-4'>
                        <Image src={CrossIcon} className='pointer-events-none h-6 m-0'/>
                    </Button>
                </div>

                <Form classname='flex flex-col py-[2vh] px-[7vw]' >
                    <Field id='title' className='mt-7' classNameInput='w-full h-[3vh] rounded-md' value={campaign.title}  formHook={register('title',{
                        required:{
                            value: true,
                            message:'Title is required'
                        }, minLength:{
                            value:2,
                            message: 'The title have to be longer than 2 characters'
                        }
                    })}>
                            <h5   className='text-2xl mr-3 font-extrabold'>Title</h5>
                    </Field>
                    <TextAreaField id='background' className='w-[70vw] drop-shadow-sm mt-7  bg-slate-700/60 rounded-md p-2' value={campaign.background} classNameInput='w-full h-[10vh] resize-none' formHook={register('background',{
                        required:{
                            value:true,
                            message:'Background is required'
                        }
                    })}>
                            <h5  className='mb-2 text-xl font-bold'>Background</h5>
                    </TextAreaField>
                    <TextAreaField id='objective' className='w-[70vw] drop-shadow-sm mt-2  bg-slate-700/60 rounded-md p-2' value={campaign.objective} classNameInput='resize-none w-full h-[10vh]' formHook={register('objective',{
                        required:{
                            value: true,
                            message:'Objective is required'
                        }
                    })}>
                            <h5 className='mb-2 text-xl font-bold'>Objective</h5>
                    </TextAreaField>
                    <div>
                        <Field id='image' type='url' className=' bg-slate-700/60 rounded-md p-2 mt-2' value={campaign.image} placeholder='Please enter the link to an image.' classNameInput='rounded w-full px-2'  formHook={register('image',{
                                required:{
                                    value:true,
                                    message: 'Image is required'
                                },pattern: /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
                            })}>
                            <h5 className='text-xl font-bold mb-2'> Image</h5>
                        </Field>
                    </div>
                    <div className=' bg-slate-700/60 rounded-md p-2 mt-2'>
                        <div className='justify-between mt-3 align-middle'>
                            <h5 className='mb-2 text-xl font-bold'>Characters</h5>
                            <Button onClick={onClickAddCharacter} type='button' className=' bg-gold1 rounded-md w-auto px-2 hover:scale-105 active:scale-100 text-black text-sm h-5' >Add Character</Button>
                        </div>
                    {charactersList.length >0 && <div className='bg-white/50 rounded-md p-1 mt-2 col'>
                    <div className='grid grid-cols-4   border-b-2 border-black/40'>
                        <h3 className='text-black font-bold text-center'>Name</h3>
                        <h3 className='text-black font-bold text-center'>Raze</h3>
                        <h3 className='text-black font-bold text-center'>Class</h3>
                        <h3 className='text-black font-bold text-center'>Level</h3>
                    </div>
                    {charactersList.map((character, index)=><CharacterResume key={index}  name={character.name} race={character.race} level={character.level} characterClass ={ character.class}/>)}
                    </div>}
                    <div className='justify-between mt-5 align-middle'>
                            <h5 className='mb-2 text-xl font-bold'>Location</h5>
                            {/* //TODO make apear location name and quit the add location button when the location is created */}
                            <Button onClick={onClickAddLocation} type='button' className=' bg-gold1 rounded-md w-auto px-2 hover:scale-105 active:scale-100 text-black text-sm h-5' >Add Location</Button>
                        </div>

                    </div>
                    <div className=' col-span-4 w-full'>
                        {Object.keys(errors).length > 0 && (
                            <div  className=' bg-red-50 rounded-md w-full px-3 py-2'>
                                <h3 className='text-red-900 font-bold'>Errors:</h3>
                                <ul className='grid grid-cols-3 gap-x-5'>
                                    
                                    {Object.values(errors).map((error, index)=> {
                                        return(<li key ={index} className='text-red-600'>- {error.message}</li>
                                        )})}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className='flex justify-center mt-6'>
                        <Button type = 'submit' className='bg-gold1 rounded-md h-[4vh] w-full px-3 hover:scale-y-105 active:scale-100  text-black text-l'>Save Campaign</Button>
                    </div>
                </Form>
                {createCharacter && <CharacterForm closeForm ={ onClickSaveAndCancelCharacter} onCharacterCreated={onCharacterCreated} campaignId={id}/>}
            
            </div>
        </View>
    )
}

export default CreateCampaign