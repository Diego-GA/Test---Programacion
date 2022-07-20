let url = 'https://afore.profuturo.mx/calculadora/resumen/usuario/11'

//Una funcion que tiene como parametros la url y la posicion del segmento que se quiere
const segmentoUrl = ( url, numeroSegmento ) =>{
    //Separo el protocolo https 
    let urlSegmentada = url.split("//");
    //Creo un arreglo con los segmentos y el endpoint, la posiion 0 corresponde al endpoint y apartir del indice 1 se muestran los segmentos
    let segmentos = urlSegmentada.join('').split('/');
    (document.getElementById("segmento")).innerHTML = segmentos[numeroSegmento];


    return segmentos[numeroSegmento] ? segmentos[numeroSegmento]: false; 
}

console.log("\nEJERCICIO 1")
console.log(segmentoUrl(url, 2) );
console.log("Para este primer ejercicio programe una funcion que recibe una url y el indice del segmento que se quiere, en caso que se pida un segmento que no existe devuelve un false")


