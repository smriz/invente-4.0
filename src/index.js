import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './res/style.css';
import registerServiceWorker from './registerServiceWorker';
import 'holi/lib/holi.css';
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
