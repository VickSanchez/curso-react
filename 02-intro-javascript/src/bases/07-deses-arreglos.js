console.log("Hola mundo");

// Desestructuración de arreglos

const personajes = [ "Vick", "Ale", "Omar"];

// const [p1, p2, p3]= personajes;


// o si solo se necesita extraer un solo elemento del arreglo se dejan los espacios vacios necesarios

const [p1] = personajes;

const [, p2] = personajes;

const [, , p3] = personajes;

console.log( p1, p2, p3)


const retornaArreglo = () => {
    return [ "ABC", 123];
}

// para desestructurar el arreglo que esta dentro de otro arreglo

const [letras, nums] = retornaArreglo();

console.log(letras, nums);


const state = ( valor ) => {
    return [ valor, () => {console.log("Hola Mundo")}];
}

const arr = state("Goku");

console.log(arr)

// arr[1](); para imprimir en consola la funcion que esta dentro del arreglo arr en la seguna posición

// Tarea
// 1. El primer valor del arreglo se llamará nombre
// 2. El segundo se llamará retNombre()

const state2 = ( nombre ) => {
    return [ nombre, () => {console.log("Hola Mundo")}];
}

const [nombre, retHola ]= state2("Jesús")

console.log( nombre );
retHola();
