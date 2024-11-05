import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="topnav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/posts/new">Create Post</NavLink>
    </div>
  );
}

export default Navbar;
