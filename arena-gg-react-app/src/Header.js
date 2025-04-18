// src/components/Header/Header.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Use NavLink for active styling
// import './Header.css'; // Optional specific styles

const Header = () => {
    return (
        <header className="site-header">
            <div className="container header-container">
                <Link to="/" className="logo">ArenaGG</Link>
                <nav className="main-nav">
                    <ul>
                        {/* Use NavLink for automatic active class */}
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact Us</NavLink></li>
                        {/* Add other nav links here */}
                    </ul>
                </nav>
                <div className="header-actions">
                    <Link to="/login" className="btn btn-primary btn-login-register">Login/Register</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;