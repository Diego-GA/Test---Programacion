let arreglo = [ 704, 384, 981, 76, 89, 531, 458, 130, 548, 931, 48, 748]

//FORMA DE ENCONTRARLLO COMO PROGRAMACION FUNCIONAL
const mayor = ( arreglo ) => Math.max.apply( null, arreglo ) 
console.log( mayor( arreglo ) );


//IMPERATIVA
let aux = arreglo[0]

for(let i = 0 ; i < arreglo.length; i++ ){
    if( arreglo[i] > aux ) aux = arreglo[i];
}

console.log( aux ); 