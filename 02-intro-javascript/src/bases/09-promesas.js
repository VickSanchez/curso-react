import {getHeroeById} from "./bases/08-imp-exp";
// Promesas
 //

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout( () => { // el setTimeout sirve para definir el tiempo que se demora en ejecutarse, recibe un callback y el segundo parametro es el tiempo en ms
//         const heroe = getHeroeById(2);
//         resolve( heroe );
//         reject( "No se pudo encontrar el héroe");
//     }, 2000 )


// } );

// // para ejecutar cuando se ejecuta el resolve

// promesa.then(( heroe ) => {
//     console.log( "heroe", heroe)
// });

// // para ejecutar cuando se ejecuta el reject

// .catch( err => console.warn( err ));

const getHeroebyIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

    setTimeout( () => { // el setTimeout sirve para definir el tiempo que se demora en ejecutarse, recibe un callback y el segundo parametro es el tiempo en ms
        const heroe = getHeroeById(id);
        if( heroe ){
            resolve( heroe );
        } else{
            reject(" No se pudo encontrar el heroe");
        }
    }, 2000 )


} );

}

getHeroebyIdAsync(4)
        // .then( heroe => console.table( heroe ))
        .then( console.table )
        // .catch( err => console.warn( err ))
        .catch( console.warn )



 