import React from "react";

interface SideBarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SideBarProps> = ({ isOpen, onClose }) => {
    return (
        <aside className={`sidebar ${isOpen ? 'show' : ''}`}>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                {/* Add more menu items as needed */}
            </ul>
            <button className="close-btn" onClick={onClose}>
                Close
            </button>
        </aside>
    )
}

export default Sidebar;