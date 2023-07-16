import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/Home" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Chat" activeClassName="active">
            Chat
          </NavLink>
        </li>
        <li>
          <NavLink to="/Translator" activeClassName="active">
            Translator
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
