import React from 'react';

const Header = () => {
    return (
        <div className='d-flex justify-content-between align-items-center'>
          <h1>Login IT Solution</h1>
          <div>
            <nav className=''>
                <a href='#' className='text-decoration-none'>Home</a>
                <a href='#' className='text-decoration-none ms-3'>Details</a>
                <a href='#' className='text-decoration-none ms-3'>Blog</a>
                <a href='#' className='text-decoration-none ms-3'>LogIn</a>
            </nav>
          </div>
        </div>
    );
};

export default Header;