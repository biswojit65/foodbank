import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import {ContextAPIProvider} from './Components/ContextReducer.js'
import Store from './Store';
import {Provider} from 'react-redux'
// Store.subscribe(()=>{console.log(Store.getState())})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={Store}><App /></Provider>);

reportWebVitals();
