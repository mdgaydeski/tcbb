import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
        <div className='container-fluid'>
            <NavLink className='navbar-brand' to='/tcbb/'>Twin Cities Brass Band</NavLink>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarCollapse' aria-controls='navbarCollapse' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarCollapse'>
                <ul className='navbar-nav w-100 justify-content-around'>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/tcbb/' exact>Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/tcbb/about' exact>About</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/tcbb/members' exact>Members</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/tcbb/events'>Events</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/tcbb/media'>Media</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/tcbb/contact'>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navigation;