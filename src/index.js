import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import STORE from './store';

const TestStore = App(STORE);
ReactDOM.render(TestStore, document.getElementById('root'));


