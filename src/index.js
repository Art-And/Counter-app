import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';

import './reset.css';

const divRoot = document.getElementById('app');

ReactDOM.render(<CounterApp value={0} />, divRoot);
