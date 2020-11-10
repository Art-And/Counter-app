import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ useTest, subtitle }) => {

  return (
    <>
      <h1>{ useTest }</h1>
      <p>{ subtitle }</p>
    </>
  );
};

PrimeraApp.propTypes = {
  useTest: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
  subtitle: 'Soy un test',
};

export default PrimeraApp;
