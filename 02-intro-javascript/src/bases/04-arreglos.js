console.log("Hola mundo");

// Definir Arreglos

    //const = new Array( 10 ) <= creara un arreglo con 10 posiciones vacias

    //arreglo.push( 1 ) <= Insertara un elemanto el arreglo

const arreglo = [1, 2, 3, 4]

// Para duplicar arreglos


let arreglo2 = [...arreglo, 5]

// Método map para recorrer los elementos y muar el arreglo para generar uno nuevo

const arreglo3 = arreglo.map(function(num){
    return num*2;
})

console.log( arreglo );

console.log( arreglo2 );

console.log( arreglo3 );


