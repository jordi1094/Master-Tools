import Button from '../core/Button'
import Image from '../core/Image'
import Heading from '../core/Heading'
import logic from '../../logic'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function Header (){
    const navigate = useNavigate()

    const handleOnClickNew = (event) => {
        event.preventDefault()
        logic.createCampaing()
        .then(campaign => {navigate(`/createCampaign/${campaign._id.toString()}`)})
    }


    return <header className='sticky bg-blueBackgroundBox top-0 grid grid-cols-[1fr_3rem] items-center gap-3 px-4 h-12'>
        <Link to= '/home'>
            <Heading level={1} className='Tittle'>Master Tools</Heading>
        </Link>
        <Link onClick={handleOnClickNew} className='text-gold1 visited:text-gold1'>New</Link>
    </header>
}

export default Header