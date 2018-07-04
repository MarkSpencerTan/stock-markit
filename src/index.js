import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from './Navigation';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


ReactDOM.render(<Navigation />, document.getElementById('nav'));
ReactDOM.render(<App />, document.getElementById('content'));

registerServiceWorker();
