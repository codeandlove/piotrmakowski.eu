import React from 'react';

import {AppContext} from "../../Context";

const Burger = () => {
    return (
        <AppContext.Consumer>
            {
                context => {
                    return (
                        <button className={`burger ${context.state.navigationIsOpened ? 'is-opened': 'is-closed'}`} onClick={context.toggleNavigation}><span></span></button>
                    )
                }
            }
        </AppContext.Consumer>
    );
};
export default Burger;
