import React from 'react';
import Navigation from './../Navigation/Navigation';
import Logo from './../Logo/Logo';

const Header = (props) => {

    return (
        <header className="header">
            <div className="header-container">
                <Logo />
                <Navigation />
            </div>
        </header>
    )
};

export default Header;