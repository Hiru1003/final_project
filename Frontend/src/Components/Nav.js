import React, { useRef, useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../Assets/logowithoutbg.png';
import "../Styles/main.css";

function NavPage() {
    const navRef = useRef();
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isBirdsDropdownOpen, setIsBirdsDropdownOpen] = useState(false);
    const [isIdentificationDropdownOpen, setIsIdentificationDropdownOpen] = useState(false);
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        const email = localStorage.getItem('userEmail');
        if (email) {
            setUserEmail(email);
        }
    }, []);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
        setIsNavOpen(!isNavOpen);
    };

    const toggleBirdsDropdown = () => {
        setIsBirdsDropdownOpen(!isBirdsDropdownOpen);
        setIsIdentificationDropdownOpen(false);
    };

    const toggleIdentificationDropdown = () => {
        setIsIdentificationDropdownOpen(!isIdentificationDropdownOpen);
        setIsBirdsDropdownOpen(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('user');
        localStorage.removeItem('userEmail');
        setUserEmail(null);
    };

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Logo" style={{ width: '18rem', paddingTop: '1.1rem' }} />
            </div>

            <nav ref={navRef} style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <Link to='/' style={{ fontSize: '18px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>Home</Link>

                {/* Birds in SL Dropdown */}
                <div className="dropdown">
                    {window.innerWidth <= 1024 ? (
                        <div className="dropdown-content">
                            <Link to="/endemic-birds" style={{ whiteSpace: 'nowrap' }}>Endemic Birds</Link>
                            <Link to="/all-birds" style={{ whiteSpace: 'nowrap' }}>All Birds</Link>
                        </div>
                    ) : (
                        <>
                            <button className="dropbtn" onClick={toggleBirdsDropdown} style={{ fontSize: '18px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                                Birds in SL
                            </button>
                            {isBirdsDropdownOpen && (
                                <div className="dropdown-content">
                                    <Link to="/endemic-birds" style={{ whiteSpace: 'nowrap' }}>Endemic Birds</Link>
                                    <Link to="/all-birds" style={{ whiteSpace: 'nowrap' }}>All Birds</Link>
                                </div>
                            )}
                        </>
                    )}
                </div>

                {/* Bird Identification Dropdown */}
                <div className="dropdown">
                    {window.innerWidth <= 1024 ? (
                        <div className="dropdown-content">
                            <Link to="/Bird-Identification" style={{ whiteSpace: 'nowrap' }}>Image Identification</Link>
                            <Link to="/Visual-Identification" style={{ whiteSpace: 'nowrap' }}>Visual Identification</Link>
                        </div>
                    ) : (
                        <>
                            <button className="dropbtn" onClick={toggleIdentificationDropdown} style={{ fontSize: '18px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                                Bird Identification
                            </button>
                            {isIdentificationDropdownOpen && (
                                <div className="dropdown-content">
                                    <Link to="/Bird-Identification" style={{ whiteSpace: 'nowrap' }}>Image Identification</Link>
                                    <Link to="/Visual-Identification" style={{ whiteSpace: 'nowrap' }}>Visual Identification</Link>
                                </div>
                            )}
                        </>
                    )}
                </div>

                <Link to='/Bird-Diary' style={{ fontSize: '18px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>Bird Diary</Link>
            </nav>

            <div className="auth-links">
                {userEmail ? (
                    <button onClick={handleLogout} style={{ fontSize: '18px', fontWeight: 'bold', whiteSpace: 'nowrap' }} className="auth-link">
                        Sign Out
                    </button>
                ) : (
                    <>
                        <Link to='/signup' style={{ fontSize: '18px', fontWeight: 'bold', whiteSpace: 'nowrap' }} className="auth-link">Signup</Link>
                        <Link to='/login' style={{ fontSize: '18px', fontWeight: 'bold', whiteSpace: 'nowrap' }} className="auth-link">Login</Link>
                    </>
                )}
            </div>

            <button className='nav-btn nav-close-btn' onClick={showNavbar} style={{ display: isNavOpen ? 'block' : 'none' }}>
                <FaTimes />
            </button>

            {!isNavOpen && (
                <button className='nav-btn' onClick={showNavbar}>
                    <FaBars />
                </button>
            )}
        </header>
    );
}

export default NavPage;
