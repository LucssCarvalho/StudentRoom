import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import * as serviceWorker from './serviceWorker';
import GetQuestions from './Components/GetQuestions';

ReactDOM.render(<GetQuestions/>, document.getElementById('root'));


serviceWorker.unregister();
