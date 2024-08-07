import Button from '../core/Button'
import Image from '../core/Image'
import Heading from '../core/Heading'
import  userIcon from '../../icons/user.svg'
import {Link} from 'react-router-dom'



function Header (){
    return <header className='sticky bg-blueBackgroundBox top-0 grid grid-cols-[1fr_3rem_3rem_2rem] items-center gap-3 px-4 h-12'>
        <Link to= '/home'>
            <Heading level={1} className='Tittle'>Master Tools</Heading>
        </Link>
        {/* <Button>Select</Button> */}
        <Link to='/createCampaign' className='text-gold1 visited:text-gold1'>New</Link>
        {/* <Button>
            <Image src= {userIcon}></Image>
        </Button> */}
    </header>
}

export default Header