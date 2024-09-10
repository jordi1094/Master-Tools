import Button from '../core/Button'
import Heading from '../core/Heading'
import Image from '../core/Image'
import View from './View'



function HistoryButton ({src, Title, onClick }){
    return <div onClick={onClick} className={'bg-[#949e9a7b] p-3 rounded-lg h-max cursor-pointer'}>
        <View className={'HistoryButtonBackground '}>
            <Image src={src} className= 'm-auto border-[1px] w-72 h-72 object-cover border-[--black]rounded-lg'></Image>
            <Heading level={4} className='text-2xl text-center'>{Title}</Heading>
        </View>
    </div>
}

export default HistoryButton