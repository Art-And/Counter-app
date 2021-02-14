import React from 'react'
import { shallow } from "enzyme";

import CounterApp from "../CounterApp";

describe('Pruebas en el <CounterApp />', () => {

  test('Debe mostrar <CounterApp /> correctamente', () => {

    const wrapper = shallow( <CounterApp value={ 0 } /> );
    expect( wrapper ).toMatchSnapshot();
  });

  test('Debe mostrar el valor por defectp de 100', () => {
    const wrapper = shallow( <CounterApp value={ 100 }/> );

    const counterText = wrapper.find('h2').text();
    //console.log(counterText);

    expect( counterText ).toBe('100');
  });
});
