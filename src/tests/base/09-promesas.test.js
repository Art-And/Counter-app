import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe ('Pruebas con promesas', () => {
  test ('getHeroByIdAsync debe retornar un Heroe Async', ( done ) => {
    const id = 1;

    getHeroeByIdAsync(id)
      .then(heroe =>{

      expect(heroe).toBe(heroes[0]);
      done();
      });
  });

  test('Debe conseguir error si el heroe por id no existe', ( done ) => {
    const id = 10;
    getHeroeByIdAsync(id)
      .catch(e => {
        expect(e).toBe('Tu personaje no existe');
        done();
      })
  });
});