import Heading from '../core/Heading'
import Image from '../core/Image'
import View from './View'
import CrossIcon from '../../icons/cross-svgrepo-com.svg'




function HistoryButton ({src, Title, onClick, onClickDelete }){
    return <div  className={'bg-[rgba(148,158,154,0.48)] p-3 rounded-lg h-max'}>
        <div className='flex flex-col items-center '>
            <Image src={CrossIcon} onClick={onClickDelete} className='h-6 w-6 bg-red-500/45 rounded self-start ml-6 cursor-pointer'></Image>
            <Image src={src} onClick={onClick} className= 'border-[1px] w-72 h-72 object-cover border-[--black] rounded-lg cursor-pointer'></Image>
            <Heading level={4} className='text-2xl text-center'>{Title}</Heading>
        </div>
    </div>
}

export default HistoryButton