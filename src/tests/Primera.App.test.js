import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
  test('Debe mostrar <PrimeraApp /> correctamente', () => {

    const saludo = 'Hola soy una prueba';
    const wrapper = shallow(<PrimeraApp useTest={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });
});

