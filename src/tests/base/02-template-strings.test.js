import { getSaludo } from '../../base/02-template-strings';

describe ('getSaludo debe retornar hola mas el nombre', () => {

  test('Prueba en el metodo getSaludo', () => {

    const nombre = 'Andres';
    const saludo = getSaludo(nombre);

    expect(saludo).toBe('Hola soy ' + nombre);
  });

});