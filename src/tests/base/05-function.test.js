import { getUser, getUserActive } from '../../base/05-funtions';

describe ('Pruebas de funciones', () => {

  test('Debe retornar un objeto', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El papi1234',
    };

    const user = getUser();

    expect(user).toEqual(userTest);

  });

  test('Debe retornar objeto con parametro', () => {
    const nam = 'Andres';

    const useTestActive = {
      uid: 'FASDFDAS',
      username: nam,
    };

    const useActive = getUserActive(nam);

    expect(useActive).toEqual(useTestActive);

  });

});

