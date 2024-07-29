import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to='/'> <div className="logo">Auth-Frisson</div></Link>
            <ul className="menu-list">
                <Link to='/'> <li>Home</li></Link>
                <li>Services</li>
                <li>Contact Us</li>
            </ul>
            <Link to='/signin'><div className="right">
                <button> SignIn</button>
            </div>
            </Link>
        </div>
    )
}

export default Navbar
