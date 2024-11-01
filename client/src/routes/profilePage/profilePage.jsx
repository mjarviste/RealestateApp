import { Link, useNavigate } from 'react-router-dom'
import Chat from '../../components/chat/chat'
import List from '../../components/list/list'
import apiRequest from '../../lib/apiRequest'
import './profilePage.scss'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const ProfilePage = () => {

    const {currentUser, updateUser} = useContext(AuthContext)

    const navigate = useNavigate()

    const handleLogOut = async () => {
        try{    
            await apiRequest.post('/auth/logout');
            updateUser(null)
            navigate('/')
        }
        catch(err) {
            console.error(err)
        }
    }

    return (
        <div className="profilePage">
            <div className="userDetails">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <Link to={'/profile/update'}>
                            <button className='btn'>Update Profile</button>
                        </Link>
                    </div>
                    <div className="info">
                        <span>Avatar: <img src={currentUser.avatar || '/noAvatar.png'}></img></span>
                        <span>Username: {currentUser.username}</span>
                        <span>E-mail: {currentUser.email}</span>
                        <button onClick={handleLogOut} className='btn'>Log out</button>
                    </div>
                    <div className="title">
                        <h1>My List</h1>
                        <Link to={'/add'}>
                            <button className='btn'>Create New Post</button>
                        </Link>
                    </div>
                    <List />
                    <div className="title">
                        <h1>Saved List</h1>
                    </div>
                    <List />
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper">
                    <Chat />
                </div>
            </div>
        </div>
    )
}

export default ProfilePage