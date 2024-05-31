import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <h1>Avinash Thokala's Professional Blog</h1>
            <nav>
                <ul>
                    <li><a href="#profile">Profile</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#experience">Experience</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
