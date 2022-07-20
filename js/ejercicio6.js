// let arreglo = [704,384,981,76,89,531,458,130,548,931,48,748]
let arreglo2 = [275,229,55,314,15,764,956,292,827,19,31]

const menor = ( arreglo ) => Math.min.apply(null, arreglo ) 

//IMPERATIVA
let aux2 = arreglo2[0]

for(let i = 0 ; i < arreglo2.length; i++ ){
    if( arreglo2[i] < aux2 ) aux2 = arreglo2[i];
}

const numeroMenor= document.getElementById("menor");
numeroMenor.innerHTML = `${aux2}`