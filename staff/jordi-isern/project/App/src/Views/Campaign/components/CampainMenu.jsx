import View from "../../../components/Library/View";
import Button from "../../../components/core/Button";
import Image from "../../../components/core/Image";
import HomeIcon from "../../../icons/home.svg" 
import BookIcon from "../../../icons/book.svg"
import PaperIcon from "../../../icons/paper.svg"
import CheckListIcon from "../../../icons/checkList.svg"
import MapIcon from "../../../icons/map.svg"
import {Link} from 'react-router-dom'


function CampaignMenu ({onclickBook, onClickPage, onClickCheckList}){

    return <View className='bg-blueBackgroundBox rounded-t-3xl pt-1 flex gap-7 '>
        <Link to='/*'>
            <Image src={HomeIcon} className='h-[6vh] pointer-events-none'/>
        </Link>
        <Button onClick={onclickBook}>
            <Image src={BookIcon} className='h-[6vh] pointer-events-none'/>
        </Button>
        <Button onClick={onClickPage}>
            <Image src={PaperIcon} className='h-[6vh] pointer-events-none'/>
        </Button>
        <Button onClick={onClickCheckList}>
            <Image src={CheckListIcon} className='h-[6vh] pointer-events-none'/>
        </Button>
        <Button>
            <Image src={MapIcon} className='h-[6vh]'/>
        </Button>
    </View>
}

export default CampaignMenu