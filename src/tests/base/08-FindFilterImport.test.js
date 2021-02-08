import { getHeroeById, getHeroesByOwner } from '../../base/08-FindFilterImport';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de heroes', () => {
  test('Debe retornar un heroe por id', () => {
    const id = 2;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find(h => h.id === id);

    expect(heroe).toEqual(heroeData);

  });

  test('Debe retornar un undefine si un heroe no existe', () => {
    const id = 20;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test('Debe retornar un array con los heroes de DC', () =>  {
    const owner = 'DC';
    const hero = getHeroesByOwner(owner);
    const heroOwnerData = heroes.filter(h => h.owner === owner);

    expect(hero).toEqual(heroOwnerData);
  });

  test('Debe retornar un array con los heroes de MArvel', () =>{
    const owner = 'Marvel';
    const hero = getHeroesByOwner(owner);
    /* const heroFilterLength = heroes.filter(h => h.owner === owner); */

    expect(hero.length).toBe(2);

  })

});