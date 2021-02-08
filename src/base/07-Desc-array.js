
const worker = ['Andres', 'Aldo', 'Julio', 'Emmanuel'];

const [ w1 ] = worker;
const [ , w2 ] = worker;
const [ , , w3 ] = worker;

//
export const returnArray = () => {
  return ['ABC', 123];
};

const [ letras, numeros ] = returnArray();

//Tarea
const state = (value) => {
  return [value, () => { console.log('Prueba Function')}];
};

const [ nombre, setNombre ] = state('Andres');

