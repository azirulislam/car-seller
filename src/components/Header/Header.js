import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
                <Link className='nav' to="/Home">Home</Link>
                <Link className='nav' to="/Review">Review</Link>
                <Link className='nav' to="/Dashboard">Dashboard</Link>
                <Link className='nav' to="/Blogs">Blogs</Link>
                <Link className='nav' to="/About">About</Link>
            
        </nav>
    );
};

export default Header;