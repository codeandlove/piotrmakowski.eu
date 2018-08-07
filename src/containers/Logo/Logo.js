import React from 'react';
import logo from './../../assets/logo.png';

const Logo = () => {
    return (
        <div className="logo">
            <a href="/" className="logo-wrapper">
                <img src={logo} className="logo-img" alt="piotrmakowski.eu" />
            </a>
        </div>
    );
};

export default Logo;
