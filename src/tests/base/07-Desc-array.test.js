const { returnArray } = require("../../base/07-Desc-array");

describe('Pruebas en desestructuracion', () => {
  test('Debe retornar un String y un Number', () => {
    const [ letter, numbers ] =returnArray();

    expect(letter).toBe('ABC');
    expect(typeof letter).toBe('string');

    expect(numbers).toBe(123);
    expect(typeof numbers).toBe('number');
  });
});
