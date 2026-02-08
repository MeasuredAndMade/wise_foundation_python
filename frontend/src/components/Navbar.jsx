import React, { useState } from 'react';
import logo from '../assets/logo.png';
import api from '../api.js';
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const page = location.pathname;
    const isAdminPage = page.startsWith('/admin');
    const navigate = useNavigate();
    
    const handleLogout = () => {
        api.get('logout/', { withCredentials: true }).then(() => {
        navigate('/');
        }).catch(err => console.error(err));
    }
    return (
        <nav className='navbar mb-3 is-fullwidth' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <a className='mt-5 ml-6' href='/'>
                    <img height='250' width='250' src={logo} alt='Measured & Made' />
                </a>
                <a className={`navbar-burger ${isOpen ? 'is-active' : ''}`} onClick={() => {setIsOpen(!isOpen)}} role='button' aria-label='menu' aria-expanded='false' data-target='mainNavigation'>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                </a>
            </div>
            <div id='mainNavigation' className={`navbar-menu ${isOpen ? 'is-active' : ''} `}>
                <div className='navbar-end mr-6 has-text-centered is-align-items-flex-end '>
                    <a className='navbar-item px-5' href='/'>Home</a>
                    <a className='navbar-item px-5' href='/about'>About</a>
                    <a className='navbar-item px-5' href='/portfolio'>Portfolio</a>
                    <a className='navbar-item px-5' href='/contact'>Contact</a>
                    {isAdminPage && <button onClick={handleLogout} className="button cta-button has-text-centered is-fullwidth mb-4">Log Out</button>}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;