import React, { Component } from 'react';

import Link from './../../components/Link/Link';
import Burger from './../Burger/Burger';

class Navigation extends Component {
    render() {
        return (
            <nav className="navigation">
                <Burger />
                <ul>
                    <li>
                        <Link url="start" label="Start" />
                    </li>
                    <li>
                        <Link url="timeline" label="Timeline" />
                    </li>
                    <li>
                        <Link url="bio" label="Bio" />
                    </li>
                    <li>
                        <Link url="portfolio" label="Portfolio" />
                    </li>
                    <li>
                        <Link url="contact" label="Contact" />
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;
