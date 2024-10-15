import React, { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import "../Styles/main.css";
import { Link } from 'react-router-dom';
import logo from '../Assets/logowithoutbg.png';

function NavPage() {
    const navRef = useRef();
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
        setIsNavOpen(!isNavOpen);
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <header>
            <img src={logo} style={{ width: '18rem', paddingTop: '1.1rem' }} />
            <nav ref={navRef}>
                <Link to='/' style={{ fontSize: '18px', fontWeight: 'bold' }}>Home</Link>
                
                {/* Dropdown handling */}
                <div className="dropdown">
                    {window.innerWidth <= 1024 ? (
                        <div className="dropdown-content">
                            <Link to="/endemic-birds">Endemic Birds</Link>
                            <Link to="/endemic-bird-2">All Birds</Link>
                            {/* Add more links as needed */}
                        </div>
                    ) : (
                        <>
                            <button className="dropbtn" onClick={toggleDropdown} style={{ fontSize: '18px', fontWeight: 'bold' }}>
                                Birds in SL
                            </button>
                            {isDropdownOpen && (
                                <div className="dropdown-content">
                                    <Link to="/endemic-birds">Endemic Birds</Link>
                                    <Link to="/endemic-bird-2">All Birds</Link>
                                    {/* Add more links as needed */}
                                </div>
                            )}
                        </>
                    )}
                </div>

                <Link to='/BirdIdentification' style={{ fontSize: '18px', fontWeight: 'bold' }}>Bird Identification</Link>
                <Link to='/visual-identification' style={{ fontSize: '18px', fontWeight: 'bold' }}>Visual Identification</Link>
                
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
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
