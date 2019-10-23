import React from 'react';
import { NavLink } from 'react-router-dom';

const Layout = ({ children }) => (
  <div>
    <div style={{ width: '200px', display: 'flex', justifyContent: 'space-between' }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/Wrong">Wrong link</NavLink>
    </div>
    {children}
  </div>
);

export default Layout;
