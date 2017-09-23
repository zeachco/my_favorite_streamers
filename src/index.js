import React from 'react';
import {render} from 'react-dom'

import './style.css';

const hook = () => {
    const App = require('./containers/App').default;
    render(<App/>, document.getElementById('root'));
};

// first render
hook();

// hot reload
if (module.hot) module.hot.accept('./containers/App', hook);
