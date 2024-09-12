
import Button from '../../../components/core/Button'
import Heading from '../../../components/core/Heading'
import View from '../../../components/Library/View'
import CharacterImage from '../../../components/Library/CharacterImage'
import PlusIcon from '../../../icons/plus.svg'
import DragHandleIcon from'../../../icons/drag-handle-svgrepo-com.svg'
import CrossIcon from '../../../icons/cross-svgrepo-com.svg'
import Image from '../../../components/core/Image'
import Draggable from 'react-draggable';

function MisionDetails({onClickClose}) {


    return (
      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        bounds= 'body'

        >
            <div className='bg-white/60 rounded-xl w-[20vw] p-4 absolute' >
                <div className=' flex justify-between'>
                    <div className='handle cursor-move'> 
                        <img className='h-[3vh]  pointer-events-none' src={DragHandleIcon}></img>
                    </div>
                    <Button onClick={onClickClose}>
                    <Image className='h-[3vh] cursor-pointer hover:scale-110 pointer-events-none'  src = {CrossIcon}></Image>
                    </Button>
                </div>
                    <Heading level='1' className='underline text-center text-black'>Title</Heading>
                <div className='h-[35vh] overflow-auto hover:overflow-y-scroll'>
                    <View className='border-b-[1px] border-black pb-3'>
                        <Heading level='2' className='text-black pb-2'>Background</Heading>
                        <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Sed luctus mauris vel ipsum facilisis, id tempus velit suscipit. Phasellus et nulla nec eros tempor hendrerit nec non justo. Suspendisse potenti. Mauris pharetra lacus nec tortor dignissim, in tincidunt orci aliquet. Integer sit amet ligula ut lorem auctor consequat. Curabitur fermentum, ligula et convallis euismod, eros purus gravida lorem, in dignissim metus ex vel ligula</p>
                    </View>
                    <View className='border-b-[1px] border-black pb-3'>
                        <Heading level='2' className='text-black pb-2'>Objective</Heading>
                        <p className='text-black'>Fusce id lectus et dui efficitur consectetur. Nulla facilisi. Vestibulum eget arcu in sem tincidunt ultricies ut eget lacus. Integer suscipit urna eu ante volutpat, a laoreet metus facilisis.</p>
                    </View>
                </div>
            </div>
      </Draggable>
    );
}

export default MisionDetails