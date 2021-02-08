//template Strings

const nombre = 'Andres';
const apellido = 'Islas';

const nameComplete = `${nombre} y ${apellido}`;

console.log(nameComplete);

export const getSaludo = (names) => {
  return `Hola soy ${names}`;
};