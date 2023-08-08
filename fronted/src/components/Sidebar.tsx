import React from "react";
import '../styles/main.css';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import {Link} from "react-router-dom";

interface SideBarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SideBarProps> = ({isOpen, onClose}) => {
    return (
        <aside className={`sidebar ${isOpen ? 'show' : ''}`}>
            <div className="sidebar-header">
                <IconButton className="close-btn" onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            </div>
            <p>
                안녕하세요!<br/>
                오늘의 TODO, 가계부, 일기를<br/>
                기록해보세요:)
            </p>
            <div className="login-btn">
                <Link to="/account/signin">
                    <button>회원가입 / 로그인</button>
                </Link>
            </div>
            <nav>
                <div className="sidebar-menu">
                    <a href="#">HOME</a>
                </div>
                <div className="sidebar-menu">
                    <a href="#">게시판</a>
                </div>
                <div className="sidebar-menu">
                    <a href="#">TODO</a>
                </div>
                <div className="sidebar-menu">
                    <a href="#">가계부</a>
                </div>
                <div className="sidebar-menu">
                    <a href="#">일기</a>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar;