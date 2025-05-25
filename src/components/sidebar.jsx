import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="col-2 p-3 bg-light">
      <h5>UserFlow Inc.</h5>
      <p>Free Plan</p>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            to="/"
          >
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            to="/products"
          >
            Product
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            to="/orders"
          >
            Order
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            to="/messages"
          >
            Message
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;