
import Button from '../../../components/core/Button'
import Heading from '../../../components/core/Heading'
import View from '../../../components/Library/View'
import DragHandleIcon from'../../../icons/drag-handle-svgrepo-com.svg'
import CrossIcon from '../../../icons/cross-svgrepo-com.svg'
import Image from '../../../components/core/Image'
import Draggable from 'react-draggable';
import CheckListElement from '../../../components/core/CheckListElement'

function CheckList({onClickClose}) {


    return (
      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 0, y: 100}}
        bounds= 'body'

        >
            <div className='bg-white/60 rounded-xl  w-[30vw] p-4  absolute' >
            <div className=' flex justify-between'>
                <div className='handle cursor-move'> 
                    <img className='h-[3vh]  pointer-events-none' src={DragHandleIcon}></img>
                </div>
                <Button onClick={onClickClose}>
                <Image className='h-[3vh] cursor-pointer hover:scale-110 pointer-events-none'  src = {CrossIcon}></Image>
                </Button>
            </div>
            <Heading level='1' className='underline text-center text-black'>Check List</Heading>
            <View className='mt-[2ch] h-[8vh] overflow-auto overflow-y-scroll '>
                <CheckListElement>mision1</CheckListElement>
                <CheckListElement>mision2</CheckListElement>
                <CheckListElement>mision3</CheckListElement>
                <CheckListElement>mision4</CheckListElement>
                <CheckListElement>mision5</CheckListElement>
                <CheckListElement>mision6</CheckListElement>
                     
            </View>
      
           
            </div>
      </Draggable>
    );
}

export default CheckList