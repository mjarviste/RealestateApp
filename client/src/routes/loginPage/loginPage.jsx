import { useContext, useState } from 'react'
import './loginPage.scss'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import apiRequest from '../../lib/apiRequest'
import { AuthContext } from '../../context/AuthContext'

const LoginPage = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const {updateUser} = useContext(AuthContext)

    const navigate  = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)
        const formData = new FormData(e.target)
        const username = formData.get("username")
        const email = formData.get("email")
        const password = formData.get("password")

        try {
            const res = await apiRequest.post("/auth/login", {
            username, password})
            updateUser(res.data.userInfo)
            navigate('/')
        }
        catch(err) {
            console.error(err)
            setError(err.response.data.message)
        }
        finally {
            setIsLoading(false)
        }
    }
    return (
        <div className="loginPage">
            <div className="formContainer">
                <h1 className='title'>Log in</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='username' required minLength={4} maxLength={20 } id='username' placeholder='Username'/>
                    <input type="password" name='password' id='password' required placeholder='Password'/>
                    <button type='submit' disabled={isLoading}>Log In</button>
                    {error && (
                        <span className='error'>{error}</span>
                    )}
                    <Link to="/register">
                        <span>Don't have an account?</span>
                    </Link>
                </form>
            </div>
            <div className="imgContainer">
                <img src='/bg.png' alt='' />
            </div>
        </div>
    )
}

export default LoginPage;