import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

  const [ counter, setCounter ] = useState(value);

  const plusClick = () =>{
    setCounter(counter + 1);
  }

  const  lessClick = () =>{
    setCounter(counter - 1);
  }

  const resetClick = () => {
    setCounter (value);
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ counter }</h2>

      <button onClick={plusClick} >+1</button>
      <button onClick={lessClick} >-1</button>
      <button onClick={resetClick} >Reset</button>

    </>
  );
};
CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}
/* CounterApp.defaultProps = {
  value: 1995,
} */

export default CounterApp;
