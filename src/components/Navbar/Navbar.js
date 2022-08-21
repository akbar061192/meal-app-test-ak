import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav-bar'>
      <h1 className='nav-heading'>Meals App</h1>
      <div>
        <ul className='nav-links'>
          <Link to='/' className='nav-link'>
            Home
          </Link>
          <Link to='/categories' className='nav-link'>
            Categories
          </Link>
          <Link to='/random-meal' className='nav-link'>
            Random Meal
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
