import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import * as serviceWorker from './serviceWorker';
import ViewMenu from './View/ViewMenu';

ReactDOM.render(<ViewMenu/>, document.getElementById('root'));

serviceWorker.unregister();
