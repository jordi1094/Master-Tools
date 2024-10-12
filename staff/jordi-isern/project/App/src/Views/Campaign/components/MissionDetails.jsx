
import Button from '../../../components/core/Button'
import Heading from '../../../components/core/Heading'
import View from '../../../components/Library/View'
import DragHandleIcon from'../../../icons/drag-handle-svgrepo-com.svg'
import CrossIcon from '../../../icons/cross-svgrepo-com.svg'
import Image from '../../../components/core/Image'
import Draggable from 'react-draggable';

function MisionDetails({onClickClose, mission}) {
    if(!mission){

        return<Draggable
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

            <p className='text-black'>Please select a mission in the lications details</p>
        </div>
        </Draggable>
    }


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
                    <Heading level='1' className='underline text-center text-black'>{mission.title}</Heading>
                <div className='h-[35vh] overflow-auto hover:overflow-y-scroll'>
                    <View className='border-b-[1px] border-black pb-3'>
                        <Heading level='2' className='text-black pb-2'>Background</Heading>
                        <p className='text-black'>{mission.background}</p>
                    </View>
                    <View className='border-b-[1px] border-black pb-3'>
                        <Heading level='2' className='text-black pb-2'>Objective</Heading>
                        <p className='text-black'>{mission.objective}</p>
                    </View>
                </div>
            </div>
      </Draggable>
    );
}

export default MisionDetails