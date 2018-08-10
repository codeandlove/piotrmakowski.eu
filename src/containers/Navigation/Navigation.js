import React from 'react';

import {withContext} from './../../Context';

import Link from './../../components/Link/Link';
import Burger from './../Burger/Burger';

const Navigation = props => {

    let navElements = [
        {
            url: 'start',
            label: 'Start',
            class: `${(props.activeNav === 0) ? 'active': ''}`
        },
        {
            url: 'timeline',
            label: 'Timeline',
            class: `${(props.activeNav === 1) ? 'active': ''}`
        },
        {
            url: 'bio',
            label: 'Bio',
            class: `${(props.activeNav === 2) ? 'active': ''}`
        },
        {
            url: 'portfolio',
            label: 'Portfolio',
            class: `${(props.activeNav === 3) ? 'active': ''}`
        },
        {
            url: 'contact',
            label: 'Contact',
            class: `${(props.activeNav === 4) ? 'active': ''}`
        },
    ];

    return (
        <nav className={`navigation ${props.navigationIsOpened ? 'nav-is-opened' : 'nav-is-closed'}`}>
            <Burger />
            <ul>

                {
                    navElements.map((item, key) => {
                        return (
                            <li key={`NavItem-${key}`} className={item.class} onClick={() => props.updateNavItem(key)}>
                                <Link url={item.url} label={item.label} />
                            </li>
                        );
                    })
                }
            </ul>
        </nav>
    );
};

export default withContext(Navigation);
