// src/components/Header/Header.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Use NavLink for active styling
import { FaUserCircle } from 'react-icons/fa'; // Import user icon

const Header = ({ isLoggedIn, onLogout }) => {
    return (
        <header className="site-header">
            <div className="container header-container">
                <Link to="/" className="logo" style={{display:'flex',alignItems:'center',gap:10}}>
                    <img src={require('./img/ArenaGG logo.png')} alt="ArenaGG Logo" style={{width:38,height:38,borderRadius:10,background:'#fff',boxShadow:'0 0 12px #E60023'}} />
                    ArenaGG
                </Link>
                <nav className="main-nav">
                    <ul>
                        {/* Use NavLink for automatic active class */}
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact Us</NavLink></li>
                        {/* Add other nav links here */}
                    </ul>
                </nav>
                <div className="header-actions">
                    {isLoggedIn ? (
                        <div style={{display:'flex',alignItems:'center',gap:10}}>
                            <Link to="/user" title="User Profile" style={{color:'#E60023',fontSize:32,display:'flex',alignItems:'center'}}>
                                <FaUserCircle />
                            </Link>
                            <button onClick={onLogout} className="btn btn-secondary" style={{padding:'8px 18px',fontSize:'1rem'}}>Logout</button>
                        </div>
                    ) : (
                        <Link to="/register" className="btn btn-primary btn-login-register">Login/Register</Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;