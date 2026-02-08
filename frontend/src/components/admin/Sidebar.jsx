import React from 'react';
import logo from '../../assets/logo.png';
import '../../css/admin.css'
import { Link, useParams } from 'react-router-dom'
import api from '../../api.js'
import { useNavigate } from 'react-router-dom'
import { FaUser, FaChartPie, FaBriefcase,  FaRegWindowMaximize, FaGlobe, FaArchive } from 'react-icons/fa';


const Sidebar = ({user, section}) => {
    const navigate = useNavigate()
    let newSection;
    if (typeof section === 'undefined') {
        newSection = ''
    } else {
        newSection = section
    }

    const links = [
        {name: 'Dashboard', path: ''},
        {name: 'Projects', path: 'projects'},
        {name: 'Media', path: 'media'},
        {name: 'General', path: 'general'}
    ];

    

    return (
        <aside className='menu '>
            <div className='logo mt-3'>
                {user && <h2 className='title has-text-black is-size-5'>Welcome, {user.username}!</h2>}                
                <hr className='has-background-grey-lighter' />
            </div>
            <ul className='menu-list sidebar'>
                {links.map((link, i) => (
                    <li key={i}>
                        <Link to={`/admin/${link.path}`} className={`is-size-4 has-text-black ${newSection === link.path ? 'is-active' : ''}`}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;