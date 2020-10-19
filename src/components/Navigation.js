import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <header className="header">
            <h1 className="header__title">WATCHMOV</h1>
            <div className="header__nav"> 
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </header>
    );
}

export default Navigation;