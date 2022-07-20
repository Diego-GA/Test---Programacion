let arreglo = [ 704, 384, 981, 76, 89, 531, 458, 130, 548, 931, 48, 748]

//FORMA DE ENCONTRARLLO COMO PROGRAMACION FUNCIONAL
const mayor = ( arreglo ) => Math.max.apply( null, arreglo ) 

//IMPERATIVA
let aux = arreglo[0]
for(let i = 0 ; i < arreglo.length; i++ ){
    if( arreglo[i] > aux ) aux = arreglo[i];
}


const numeroMayor = document.getElementById("mayor");
numeroMayor.innerHTML = `${aux}`

console.log("\n\nEJERCICIO 5 Y 6")
console.log("Hice dos algoritmos para este problema uno imperativo y otro funcional. Uno utilizando el objeto Math y otro con un simple for");