import React from 'react';

import {withContext} from './../../Context';

import Link from './../../components/Link/Link';
import Burger from './../Burger/Burger';

const Navigation = props => {

    let navElements = [
        {
            name: 'start',
            url: 'start',
            label: 'Start',
            class: `${(props.activeNav === 'start') ? 'active': ''}`,
            icon: (<i className="material-icons">home</i>)
        },
        {
            name: 'timeline',
            url: 'timeline',
            label: 'Timeline',
            class: `${(props.activeNav === 'timeline') ? 'active': ''}`
        },
        {
            name: 'bio',
            url: 'bio',
            label: 'Bio',
            class: `${(props.activeNav === 'bio') ? 'active': ''}`
        },
        {
            name: 'certificates',
            url: 'certificates',
            label: 'Certificates',
            class: `${(props.activeNav === 'certificates') ? 'active': ''}`
        },
        {
            name: 'portfolio',
            url: 'portfolio',
            label: 'Portfolio',
            class: `${(props.activeNav === 'portfolio') ? 'active': ''}`
        },
        {
            name: 'contact',
            url: 'contact',
            label: 'Contact',
            class: `${(props.activeNav === 'contact') ? 'active': ''}`
        }
    ];

    return (
        <nav className={`navigation ${props.navigationIsOpened ? 'nav-is-opened' : 'nav-is-closed'}`}>
            <Burger />
            <ul>

                {
                    navElements.map((item, key) => {
                        return (
                            <li key={`NavItem-${key}`} className={item.class} onClick={() => props.updateNavItem(item.name)}>
                                <Link url={item.url} label={item.label} icon={item.icon} />
                            </li>
                        );
                    })
                }
            </ul>
        </nav>
    );
};

export default withContext(Navigation);
