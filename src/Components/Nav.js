import React, { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import "../Styles/main.css";

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
                <a href='/#'>Home</a>
                <a href='/#'>Bird Identification</a>
                <a href='/#'>Bird Migration</a>
                <a href='/#'>Visual Identification</a>
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
