console.log("Hola mundo");

// Funciones

const saludo = function(nombre){
    return `Hola, ${ nombre }`;
};

// Funcion flecha

const saludar2 =  (apellido) => {
    return `Hola, ${ apellido }`;
}

// si solo hace un return se simplifica

const saludar3 = ( nom ) => `Hola ${ nom }`;

// si solo se retorna un objeto se simplifica y se pone entre parentesis el objeto

const getUser = () => ({id: 123, nombre: "Vic"});




console.log( saludo('Vick') );

console.log( saludar2('Sanchez') );

console.log( saludar3('Hugo') );

console.log( getUser() );



// function getUsuarioActivo( nombre ) {
//     return {
//         uid: "ABC567",
//         username: nombre
//     }
// };

// const usuarioActivo = getUsuarioActivo("Victor");

// console.log(usuarioActivo)

// Ejercicio
// 1. Transformar en función flecha
// 2. Tiene que retornar un objeto


const getUsuarioActivo = ( nombre ) =>  ({
        uid: "ABC567",
        username: nombre
    })
;

const usuarioActivo = getUsuarioActivo("Victor");

console.log(usuarioActivo)
