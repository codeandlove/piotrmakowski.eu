import React from 'react';

import {withContext} from "../../Context";

const Burger = (props) => {
    return (
        <button role="button" className={`burger ${props.navigationIsOpened ? 'nav-is-opened on' : 'nav-is-closed off'}`} onClick={props.toggleNavigation}><span></span></button>
    );
};
export default withContext(Burger);
