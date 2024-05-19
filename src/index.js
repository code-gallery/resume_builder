import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const primaryColor = "#C30025";
localStorage.setItem("theme-primary-color",primaryColor);

ReactDOM.render( <App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
