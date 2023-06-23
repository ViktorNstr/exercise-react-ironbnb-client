import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/apartments">Apartments</NavLink>
        </li>
        <li>
          <NavLink to="/apartments/create">Create Apartment</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;