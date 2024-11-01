import { useContext, useState } from 'react'
import './profileUpdatePage.scss'
import { AuthContext } from '../../context/AuthContext'
import apiRequest from '../../lib/apiRequest'
import { useNavigate } from 'react-router-dom'
import UploadWidget from '../../components/uploadWidget/uploadWidget'

const ProfileUpdatePage = () => {
    const {currentUser, updateUser} = useContext(AuthContext)
    const [error, setError] = useState(null)
    const [avatar, setAvatar] = useState(currentUser.avatar)
    const [isLoading, setIsLoading] = useState(false)
    const navigate  = useNavigate()

    const handleUpdate = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)
        const formData = new FormData(e.target)
        const {username, email, password} = Object.fromEntries(formData);

        try {
            const res = await apiRequest.put(`/users/${currentUser.id}`, {
            username, email, password, avatar})
            updateUser(res.data)
            navigate('/profile')
        }
        catch(err) {
            console.error(err)
            setError(err.response.data.message)
        }
        finally {
            setIsLoading(false)
        }
    }
    return(
        <div className="profileUpdatePage">
            <div className="formContainer">
                <h1 className='title'>Update Profile</h1>
                <form onSubmit={handleUpdate}>
                    <input type="text" name='username' id='username' defaultValue={currentUser.username}/>
                    <input type='text' name='email' id='email' defaultValue={currentUser.email}/>
                    <input type="password" name='password' id='password' placeholder='Password'/>
                    <button disabled={isLoading} type='submit'>Update</button>
                    {error && (
                        <span className='error'>{error}</span>
                    )}
                </form>
            </div>
            <div className="imgContainer"> 
                <img src={avatar || "/noAvatar.png"} alt='' />
                <UploadWidget uwConfig={{
                    cloudName: "dukf5o4pl",
                    uploadPreset: "estateApp",
                    multiple: false,
                    maxImageFileSize: 2000000,
                    folder: "avatars"
                }}
                setAvatar={setAvatar}
                />
            </div>
        </div>
    )
}

export default ProfileUpdatePage