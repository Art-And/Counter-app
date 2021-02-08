
describe('Pruebas con el archivo demo.test.js', () => {

  test('Deben ser iguales los string', () => {
    const message = 'test';
    const message2 = "test";
    expect(message).toBe(message2);
  });

});




