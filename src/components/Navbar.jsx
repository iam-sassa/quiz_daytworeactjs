import React from "react";

import { NavLink } from 'react-router-dom';
import './Component.Style.css';

const Navbar = () => {
    return (
        <nav
        style={{

            backgroundColor: 'Yellow',
            padding: '10px',
            paddingLeft: '50px',
            display: 'flex',
            gap: '20px',
        }}
        >
        <NavLink
              
              to='/'
              style={({ isActive }) => (isActive ? {color: 'red', textDecoration: 'none', fontSize: '20px'} : {textDecoration: 'none', fontSize: '20px'})}
        >Home
        </NavLink>

        <NavLink
        to='/profile'
        style={({ isActive }) => (isActive ? {color: 'red', textDecoration: 'none', fontSize: '20px'} : {textDecoration: 'none', fontSize: '20px'})}>
            Profile
        </NavLink>
        </nav>
    )
}

export default Navbar;