import React, {RefObject, useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import "../styles/main.css"
import Sidebar from "./Sidebar";

function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen((prevState: any) => !prevState);
    };

    return (
        <>
            <header>
                {/* Hamburger menu button */}
                <button className="sidebar-btn" onClick={toggleSidebar}>
                    <FaBars/>
                </button>
                {/* Logo */}
                <h3>Money Book</h3>
                {/* Login Button */}
                <button className="login-btn">로그인</button>
                {/* Render the SideBar component */}
            </header>
            {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar}/>}
        </>
    )
}

export default Header;