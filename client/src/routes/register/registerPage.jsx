import './registerPage.scss'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import apiRequest from '../../lib/apiRequest'

const RegisterPage = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
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
            const res = await apiRequest.post("/auth/register", {
            username, email, password})
            navigate('/login')
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
        <div className="registerPage">
            <div className="formContainer">
                <h1 className='title'>Create an Account</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='username' id='username' placeholder='Username'/>
                    <input type='text' name='email' id='email' placeholder='Email'/>
                    <input type="password" name='password' id='password' placeholder='Password'/>
                    <button disabled={isLoading} type='submit'>Register</button>
                    {error && (
                        <span className='error'>{error}</span>
                    )}
                    <Link to="/login">
                        <span>Already have an account?</span>
                    </Link>
                </form>
            </div>
            <div className="imgContainer">
                <img src='/bg.png' alt='' />
            </div>
        </div>
    )
}

export default RegisterPage;