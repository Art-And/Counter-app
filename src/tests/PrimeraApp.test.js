import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
  test('Debe mostrar <PrimeraApp /> correctamente', () => {

    const saludo = 'Hola soy una prueba';
    const wrapper = shallow(<PrimeraApp useTest={ saludo } />);

    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de mostrar el subtitulo enviado por props', () => {
    const saludo = 'Hola soy una prueba';
    const subtitulo = 'Hola soy un subtitulo';

    const wrapper = shallow(
      <PrimeraApp
        useTest={ saludo }
        subtitle={ subtitulo }
      />);

    const textoParrafo = wrapper.find('p').text();
    console.log(textoParrafo);

    expect( textoParrafo ).toBe( subtitulo );

  });

});

