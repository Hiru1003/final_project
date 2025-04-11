import React, { useRef, useState, useEffect } from 'react';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import "../Styles/main.css";
import { Link } from 'react-router-dom';
import logo from '../Assets/logowithoutbg.png';

function NavPage() {
    const navRef = useRef();
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [userEmail, setUserEmail] = useState(null);

    // Check if user is logged in based on localStorage
    useEffect(() => {
        const email = localStorage.getItem('userEmail');
        if (email) {
            setUserEmail(email); // Set the email if the user is logged in
        }
    }, []);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
        setIsNavOpen(!isNavOpen);
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    const handleLogout = () => {
        // Remove user data from localStorage on logout
        localStorage.removeItem('userEmail');
        setUserEmail(null); // Update state to reflect the logout
    }

    return (
        <header>
            <div className="logo">
                <img src={logo} style={{ width: '18rem', paddingTop: '1.1rem' }} />
            </div>
            <nav ref={navRef}>
                <Link to='/' style={{ fontSize: '18px', fontWeight: 'bold' }}>Home</Link>

                {/* Dropdown handling */}
                <div className="dropdown">
                    {window.innerWidth <= 1024 ? (
                        <div className="dropdown-content">
                            <Link to="/endemic-birds">Endemic Birds</Link>
                            <Link to="/endemic-bird-2">All Birds</Link>
                        </div>
                    ) : (
                        <>
                            <button className="dropbtn" onClick={toggleDropdown} style={{ fontSize: '18px', fontWeight: 'bold' }}>
                                Birds in SL
                            </button>
                            {isDropdownOpen && (
                                <div className="dropdown-content">
                                    <Link to="/endemic-birds">Endemic Birds</Link>
                                    <Link to="/all-birds">All Birds</Link>
                                </div>
                            )}
                        </>
                    )}
                </div>

                <Link to='/Bird-Identification' style={{ fontSize: '18px', fontWeight: 'bold' }}>Bird Identification</Link>
                <Link to='/Visual-Identification' style={{ fontSize: '18px', fontWeight: 'bold' }}>Visual Identification</Link>
                <Link to='/Bird-Diary' style={{ fontSize: '18px', fontWeight: 'bold' }}>Bird Diary</Link>
            </nav>

            <div className="auth-links">
                {userEmail ? (
                    <button onClick={handleLogout} style={{ fontSize: '18px', fontWeight: 'bold' }} className="auth-link">
                        Sign Out
                    </button>
                ) : (
                    <>
                        <Link to='/signup' style={{ fontSize: '18px', fontWeight: 'bold' }} className="auth-link">Signup</Link>
                        <Link to='/login' style={{ fontSize: '18px', fontWeight: 'bold' }} className="auth-link">Login</Link>
                    </>
                )}
            </div>

            <button className='nav-btn nav-close-btn' onClick={showNavbar} style={{ display: isNavOpen ? 'block' : 'none' }}>
                <FaTimes />
            </button>

            {/* Only show the menu icon (FaBars) when the menu is not open */}
            {!isNavOpen && (
                <button className='nav-btn' onClick={showNavbar}>
                    <FaBars />
                </button>
            )}
        </header>
    );
};

export default NavPage;
