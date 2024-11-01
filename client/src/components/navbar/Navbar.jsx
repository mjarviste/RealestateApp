import { Link } from 'react-router-dom'
import './navbar.scss'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const {currentUser} = useContext(AuthContext)

    console.log("CurrentUser:", currentUser)
    return (
        <nav>
            <div className="left">
                <a className='logo' href='/'>
                    <img src='/logo.svg' alt=''></img>
                    <span>PropertyPal</span>
                </a>
                <a href='/'>Home</a>
                <a href='/'>About</a>
                <a href='/'>Contact</a>
                <a href='/'>Agents</a>
            </div>
            <div className="right">
                {currentUser ? 
                (<div>
                    <div className="user">
                        <img src={currentUser.avatar || '/noAvatar.png'} alt="" />
                        <span>{currentUser.username}</span>
                        <Link className='profile' to={"/profile"}>
                            <div className="notification">3</div>
                            <span>Profile</span>
                        </Link>
                    </div>
                </div>) : 
                (<>
                    <a href='/login'>Sign In</a>
                    <a className='register' href='/register'>Sign Up</a>
                </>)}
                <div className='menuIcon'>
                    <img src='/menuIcon2.svg' alt='' onClick={() => setIsOpen(!isOpen)}/>
                </div>
                <div className={isOpen ? "menu active" : "menu"}>
                    <a href='/'>Home</a>
                    <a href='/'>About</a>
                    <a href='/'>Contact</a>
                    <a href='/'>Agents</a>
                    <a href='/login'>Sign In</a>
                    <a href='/register'>Sign Up</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar