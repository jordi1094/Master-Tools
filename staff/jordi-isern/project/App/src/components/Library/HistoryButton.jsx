import Button from '../core/Button'
import Heading from '../core/Heading'
import Image from '../core/Image'
import View from './View'



function HistoryButton ({src, Title }){
    return <Button className={'bg-white/20 p-3 rounded-lg h-max'}>
        <View className={'HistoryButtonBackground'}>
            <Image src={src} className= 'border-[1px] border-[--black]rounded-lg'></Image>
            <Heading level={4} className='font-size: x-large'>{Title}</Heading>
        </View>
    </Button>
}

export default HistoryButton