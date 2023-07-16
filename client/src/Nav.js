import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/chat" activeClassName="active">
            Chat
          </NavLink>
        </li>
        <li>
          <NavLink to="/translate" activeClassName="active">
            Translator
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
