import React, { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import "../Styles/main.css";
import { Link } from 'react-router-dom';

function NavPage () {
    const navRef = useRef();
    const [isNavOpen, setIsNavOpen] = useState(false); // State to track the menu visibility

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
        setIsNavOpen(!isNavOpen); // Toggle the state when the navbar is shown or hidden
    }

    return (
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <Link to='/'>Home</Link>
                <Link to='/BirdIdentification'>Bird Identification</Link>
                <Link to='/endemic-birds'>Endemic Birds</Link>
                <Link to='/visual-identification'>Visual Identification</Link>
                
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes/>
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
