import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

import {registerObserver} from 'react-perf-devtool';

// React pref dev tools
registerObserver();

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
