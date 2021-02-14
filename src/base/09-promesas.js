import { getHeroeById } from './08-FindFilterImport';

export const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      (heroe) ? resolve(heroe):
      reject('Tu personaje no existe');
    }, 1500);
  });
};

/* getHeroeByIdAsync(2)
  .then(heroe => console.log('Heroe', heroe))
  .catch(err => console.warn(err)); */