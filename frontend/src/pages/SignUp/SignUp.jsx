import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './SignUp.css'

const SignUp = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        name: "",
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
            const response = await axios.post('http://localhost:8000/user/signup', data);
            if (response.data.success) {
                setData({
                    name: "",
                    email: "",
                    password: ""
                })
                navigate('/')
            }
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    return (

        <div className='signup'>
            <form onSubmit={handleSubmit} className="form">
                <div className="title">
                    <p>Sign Up</p>
                </div>
                <div className="inputs">
                    <input name="name" onChange={handleChange} type="text" placeholder='Enter name' required />
                    <input name="email" onChange={handleChange} type="email" placeholder='Enter email' required />
                    <input name="password" onChange={handleChange} type="password" placeholder='Enter password' required />
                </div>
                <button type='submit' className='btn'>Create an Account</button>
                <p>Already have an account ?
                    <Link to='/signin'><span> SignIn</span></Link>
                </p>
            </form>
        </div>
    )
}

export default SignUp
