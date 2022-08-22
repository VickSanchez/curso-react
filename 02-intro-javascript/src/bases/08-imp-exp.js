// import, export, funciones
// para importar primero se tiene que exportar de un archivo externo
// import heroes, { owners } from '../data/heroes.js';
import heroes from '../data/heroes.js';
// console.log(owners);

// const getHeroeById = (id) => {
//     return heroes.find( ( heroe ) => {
//         if( heroe.id === id){
//             return true;            
//         } else {
//             return false;
//     }
//     });
// }

// Simplificando estas lineas de codigo se quitan los returns

export const getHeroeById = (id) => heroes.find( ( heroe ) => heroe.id === id);

// console.log( getHeroeById(2) );

export const getHeroesByOwner = ( owner ) => heroes.filter( ( heroe ) => heroe.owner === owner);

// console.log( getHeroesByOwner('Marvel') );

