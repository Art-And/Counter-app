import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import './index.css';

const divRoot = document.getElementById('app');

ReactDOM.render(<PrimeraApp useTest='Test' />, divRoot);
