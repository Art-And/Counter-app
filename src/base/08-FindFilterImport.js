import heroes from '../data/heroes';

/* const getHeroeById = (id) => {
  return heroes.find( heroe => {
    if (heroe.id === id) {
      return true;
    }else {
      console.log('No es un valido');
      return false;
    };
  });
} */

/* const companies = 'Marvel';
const ids = 4; */

export const getHeroeById = (id) => {
  return heroes.find( (heroe) => heroe.id === id);
}

/* console.log(getHeroeById(ids)); */

export const getHeroesByOwner = ( owner ) => {
  return heroes.filter( (heroe) => heroe.owner === owner)
};

/* console.log(getHeroesByOwner(companies)); */
