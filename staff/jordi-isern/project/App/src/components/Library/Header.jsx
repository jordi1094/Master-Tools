import './Header.css'
import Button from '../core/Button'
import Image from '../core/Image'
import Heading from '../core/Heading'
import  userIcon from '../../icons/user.svg'


function Header (){
    return <header className='Header'>
        <Heading level={1} className='Title'>Master Tools</Heading>
        <div className='MenuContainer'>
            <Button>Select</Button>
            <Button>New</Button>
            <Button>
                <Image src= {userIcon}></Image>
            </Button>
        </div>
    </header>
}

export default Header