import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import * as serviceWorker from './serviceWorker';
import getComponents from './Components/getComponents';

ReactDOM.render(<getComponents/>, document.getElementById('root'));


serviceWorker.unregister();
