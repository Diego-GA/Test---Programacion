

let url = 'https://afore.profuturo.mx/calculadora/resumen/usuario/11'

//Una funcion que tiene como parametros la url y la posicion del segmento que se quiere
const segmentoUrl = ( url, numeroSegmento ) =>{
    //Separo el protocolo https 
    let urlSegmentada = url.split("//");
    //Creo un arreglo con los segmentos y el endpoint
    let segmentos = urlSegmentada.join('').split('/');

    return segmentos[numeroSegmento]; 
}

console.log(segmentoUrl(url, 2) );
