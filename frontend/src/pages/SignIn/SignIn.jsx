import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignIn.css'
import axios from 'axios'

const SignIn = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        setData((prev) => ({
            ...prev, [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/user/signin', data);
            if (response.data.success) {
                console.log(response);
                navigate('/');
            }
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    return (
        <div className='signin'>
            <form onSubmit={handleSubmit} className="form">
                <div className="title">
                    <p>Sign In</p>
                </div>
                <div className="inputs">
                    <input name="email" onChange={handleChange} type="email" placeholder='Enter email' required />
                    <input name="password" onChange={handleChange} type="password" placeholder='Enter password' required />
                </div>
                <button type='submit' className='btn'>Sign In</button>
                <p>Don't have Account ?
                    <Link to='/signup'><span> SignUp</span></Link>
                </p>
            </form>
        </div>
    )
}

export default SignIn
