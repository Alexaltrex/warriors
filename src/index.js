import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from "react-router-dom";

import './assets/styles/style.scss';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
