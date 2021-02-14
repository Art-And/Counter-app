import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
//import PrimeraApp from './PrimeraApp';

import './reset.css';

const divRoot = document.getElementById('app');

ReactDOM.render(<CounterApp value={0} />, divRoot);
//ReactDOM.render(<PrimeraApp useTest='Hola soy una prueba'/>, divRoot);
