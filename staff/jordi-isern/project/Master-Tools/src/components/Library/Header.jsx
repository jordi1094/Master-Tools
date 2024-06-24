import './Header.css'
import Button from '../core/Button'
import Heading from '../core/Heading'


function Header (){
    return <header className='Header'>
        <Heading level={1} className='Title'>Master Tools</Heading>
        <Button>Select</Button>
    </header>
}

export default Header