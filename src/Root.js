import React from 'react';

import Context from './Context';

import App from './App';

const Root = () => {

    return (
        <Context>
            <App />
        </Context>
    );
};

export default Root;
