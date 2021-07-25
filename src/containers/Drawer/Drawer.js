import React, {useEffect} from 'react';
import {withContext} from "../../Context";
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import Viewer from './../Viewer/Viewer';

const Drawer = props => {
    const {toggleDrawer, drawerIsOpened} = props;

    const handleClose = () => {
        toggleDrawer(false);
        props.history.push('/');
    }

    return (
        <div className={`drawer ${(drawerIsOpened) ? 'drawer-is-opened':'drawer-is-closed'}`}>
            <div className="drawer-header">
                <h2>
                    {props.portfolioActiveItem.title}
                </h2>
                <button  className="close" onClick={handleClose}>
                    <i className="material-icons">close</i>
                </button>
            </div>
            <Switch>
                <Route exact path='/' component={null}/>
                <Route path='/portfolio/:href' component={Viewer} />
            </Switch>
        </div>
    )
}

export default withContext(withRouter(Drawer));