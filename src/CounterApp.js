import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

  const handleClick = () =>{
    console.log('mas uno +1');
  }

    return(
    <>
      <h1>CounterApp</h1>
      <h2>{ value }</h2>

      <button onClick={handleClick} >+1</button>
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
