import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='d-flex justify-content-between align-items-center'>
          <h1>Login IT Solution</h1>
          <div>
            <nav className=''>
                <a href='#' className='text-decoration-none text-dark'>Dashboard</a>
                <a href='#' className='text-decoration-none ms-3 text-dark'>Details</a>
                <a href='#' className='text-decoration-none ms-3 text-dark'>Blog</a>
                <a href='#' className='text-decoration-none ms-3 text-dark'>LogIn</a>
            </nav>
          </div>
        </div>
    );
};

export default Header;