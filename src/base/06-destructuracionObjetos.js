
//Destructuracion de objetos

const persona = {
  nombre: 'Andres',
  edad: 26,
  clave: 'developer',
};

/* const { edad, nombre, clave } = persona; */

/* console.log(nombre);
console.log(edad);
console.log(clave); */

const returnWorker = ({ clave, nombre, edad, rango = 'Jr.'  }) => {
  return {
    nombreClave: clave,
    anios: edad,
    lating: {
      lat: 14.1232,
      lng: -12.3232,
    }
  }
};

const { nombreClave, anios, lating } = returnWorker(persona);
const { lat, lng } = lating;

console.log(nombreClave, anios);
console.log(lat, lng);
