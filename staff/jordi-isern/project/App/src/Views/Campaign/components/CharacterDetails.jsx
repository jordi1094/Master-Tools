
import Button from '../../../components/core/Button'
import Heading from '../../../components/core/Heading'
import View from '../../../components/Library/View'
import CharacterImage from '../../../components/Library/CharacterImage'
import PlusIcon from '../../../icons/plus.svg'
import DragHandleIcon from'../../../icons/drag-handle-svgrepo-com.svg'
import CrossIcon from '../../../icons/cross-svgrepo-com.svg'
import Image from '../../../components/core/Image'
import logic from '../../../logic'
import Draggable from 'react-draggable'
import { useState } from 'react'


function CharacterDetails({characterId}) {
    const [character , setCharacter] = useState('')
    logic.getCharacter(characterId)
    .then((character) => {
        setCharacter(character)
    })
    
    return (
        <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 0, y: 100}}
        bounds= 'body'>
            <div className='bg-white/50'>
                <div className='handle cursor-move'> 
                        <img className='h-[3vh]  pointer-events-none' src={DragHandleIcon}></img>
                    </div>
                <p className='text-green'>{character.name}</p>
            </div>    
        </Draggable>
    )
}

export default CharacterDetails