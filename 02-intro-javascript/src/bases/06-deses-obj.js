console.log("Hola mundo");

// Desustructuración
// Asignación desestructurante

const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
};

// Se extraen las propiedades para definirlas dentro de variables

// const { nombre, edad, apellido} = persona;

// console.log( nombre );
// console.log( edad );
// console.log( apellido );



const retornaPersona = ({ nombre, apellido, edad, rango = "Cápitan"}) => {
    console.log(edad, nombre, apellido);
} ;

retornaPersona( persona )

const getAvenger = ({ nombre, apellido, edad, rango = "Cápitan"}) => {
    return {
        nombreClave: "Ironman",
        anios: edad,
        latlng: {
            lat: 14.3244,
            lng: -21.2464
        }

    }
}

const avenger = getAvenger( persona );

console.log( avenger )


const { nombreClave, anios, latlng:{ lat, lng}} = getAvenger( persona );

console.log( nombreClave, anios )
console.log( lat, lng )