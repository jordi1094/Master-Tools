import './index.css'


import Button from '../../core/Button'
import Heading from '../../core/Heading'
import Image from '../../core/Image'
import View from '../View'



function HistoryButton ({src, Title }){
    return <Button className={'HistoryButton'}>
        <View className={'HistoryButtonBackground'}>
            <Image src={'/images/PortadasCampañas/Reseña DnD - Icewindale Rime of the Frostmaiden.jpg'}></Image>
            <Heading level={4}>{Title}</Heading>
        </View>
    </Button>
}

export default HistoryButton