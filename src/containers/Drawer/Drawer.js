import React from 'react';
import {withContext} from "../../Context";
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import Viewer from './../Viewer/Viewer';

const Drawer = props => {
    const {toggleDrawer, drawerIsOpened} = props;

    const handleClose = () => {
        toggleDrawer();

        props.history.push('/');
    }

    return (
        <div className={`drawer ${(drawerIsOpened) ? 'drawer-is-opened':'drawer-is-closed'}`}>
            <button onClick={handleClose}>Close</button>
            <Switch>
                <Route exact path='/' component={null}/>
                <Route path='/portfolio/:href' component={Viewer} />
            </Switch>
        </div>
    )
}

export default withContext(withRouter(Drawer));