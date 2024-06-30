import Button from "../core/Button";
import Heading from "../core/Heading";
import Image from "../core/Image";

function HistoryButton ({src, Title }){
    return <Button className={'HistoryButton'}>
        <Image src={'/images/PortadasCampañas/Reseña DnD - Icewindale Rime of the Frostmaiden.jpg'}></Image>
        <Heading level={4}>{Title}</Heading>
    </Button>
}

export default HistoryButton