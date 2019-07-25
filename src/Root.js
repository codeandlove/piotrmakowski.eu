import React from 'react';

import Context from './Context';

import { BrowserRouter } from 'react-router-dom';

import App from './App';

const Root = () => {

    return (
        <BrowserRouter>
            <Context>
                <App />
            </Context>
        </BrowserRouter>
    );
};

export default Root;
