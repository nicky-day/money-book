import React, {RefObject} from 'react';
import {useRef} from "react";
import {FaBars, FaTimes} from 'react-icons/fa'
import "../styles/main.css"

function Header() {
    const navRef: RefObject<HTMLElement> = useRef(null);

    const showSidebar = () => {
        navRef.current?.classList.toggle("responsive_sidebar");
    }

    return (
        <header>
            {/* Hamburger menu button */}
            <button className="sidebar-btn" onClick={showSidebar}>
                <FaBars/>
            </button>
            {/* Logo */}
            <h3>Money Book</h3>
            {/* Login Button */}
            <button className="login-btn">로그인</button>
        </header>
    )
}

export default Header;