import React, { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import "../Styles/main.css";
import { Link } from 'react-router-dom';
import logo from '../Assets/logowithoutbg.png';

function NavPage () {
    const navRef = useRef();
    const [isNavOpen, setIsNavOpen] = useState(false);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
        setIsNavOpen(!isNavOpen);
    }

    return (
        <header>
            <img src={logo} style={{width:'18rem', paddingTop:'1.1rem'}}/>
            <nav ref={navRef}>
                <Link to='/' style={{fontSize:'18px', fontWeight:'bold'}}>Home</Link>
                <Link to='/BirdIdentification' style={{fontSize:'18px', fontWeight:'bold'}}>Bird Identification</Link>
                <Link to='/endemic-birds' style={{fontSize:'18px', fontWeight:'bold'}}>Endemic Birds</Link>
                <Link to='/visual-identification' style={{fontSize:'18px', fontWeight:'bold'}}>Visual Identification</Link>
                
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
