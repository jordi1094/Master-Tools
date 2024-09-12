
import Button from '../../../components/core/Button'
import Heading from '../../../components/core/Heading'
import View from '../../../components/Library/View'
import CharacterImage from '../../../components/Library/CharacterImage'
import PlusIcon from '../../../icons/plus.svg'
import DragHandleIcon from'../../../icons/drag-handle-svgrepo-com.svg'
import CrossIcon from '../../../icons/cross-svgrepo-com.svg'
import Image from '../../../components/core/Image'
import Draggable from 'react-draggable'


function CharacterDetails({characterId}) {
    return (
        <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 0, y: 100}}
        bounds= 'body'>
            <div className='bg-black'>
                <div className='handle cursor-move'> 
                        <img className='h-[3vh]  pointer-events-none' src={DragHandleIcon}></img>
                    </div>
                <p className='bg-red color green'>hola</p>
                {characterId}
            </div>    
        </Draggable>
    )
}

export default CharacterDetails