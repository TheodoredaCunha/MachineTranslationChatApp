import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'

const Navbar = () => {
  return (
    <nav>
      <ul id='Navbar'>
        <li>
          <NavLink to="/" className='navStyle'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Chat" className='navStyle'>
            Chat
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
