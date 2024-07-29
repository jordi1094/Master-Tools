import Button from '../../core/Button'
import Image from '../../core/Image'
import Heading from '../../core/Heading'
import  userIcon from '../../../icons/user.svg'
import {Link} from 'react-router-dom'

import './index.css'


function Header (){
    return <header className='Header'>
        <Link to= '/home'>
            <Heading level={1} className='Tittle'>Master Tools</Heading>
        </Link>
        <Button>Select</Button>
        <Button>New</Button>
        <Button>
            <Image src= {userIcon}></Image>
        </Button>
    </header>
}

export default Header