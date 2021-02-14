import React from 'react'
import { shallow } from "enzyme";

import CounterApp from "../CounterApp";


describe('Pruebas en el <CounterApp />', () => {

  let wrapper = shallow( <CounterApp value={0} />);

  beforeEach(() => {
    wrapper = shallow( <CounterApp value={0} />);
  });

  test('Debe mostrar <CounterApp /> correctamente', () => {

    expect( wrapper ).toMatchSnapshot();
  });

  test('Debe mostrar el valor por defectp de 100', () => {
    const wrapper = shallow( <CounterApp value={ 100 }/> );

    const counterText = wrapper.find('h2').text();
    //console.log(counterText);

    expect( counterText ).toBe('100');
  });

  test('Debe incrementar con el boton de mas 1', () => {
    //const buttonAdd = wrapper.find('button').at(0);
    //console.log(buttonAdd.html());
    wrapper.find('button').at(0).simulate('click');

    const counterText = wrapper.find('h2').text();

    expect( counterText ).toBe('1');

  });

  test('Debe decrementar con el boton de menos 1', () => {
    //const buttonAdd = wrapper.find('button').at(0);
    //console.log(buttonAdd.html());
    wrapper.find('button').at(1).simulate('click');

    const counterText = wrapper.find('h2').text();

    expect( counterText ).toBe('-1');

  });

  test('Debe resetear valor del Counter', () => {
    //const buttonAdd = wrapper.find('button').at(0);
    //console.log(buttonAdd.html());
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(2).simulate('click');

    const counterText = wrapper.find('h2').text();

    expect( counterText ).toBe('0');

  });
});
