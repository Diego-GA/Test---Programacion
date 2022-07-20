let miObjeto = [
    {status:'activo'},
    {status:'inactivo'},
    {status:'activo' },
]


const funcionContadora = ( miObjeto ) => {
    let activoInactivo = miObjeto.reduce( (acumulador, elemento) => {
    
        if( elemento.status.toLocaleLowerCase() === 'activo' ){
            acumulador[0]++;
            return acumulador
        }else if( elemento.status.toLocaleLowerCase() === 'inactivo' ){
            acumulador[1]++;
            return acumulador;
        }
    }, [ 0 , 0 ])

    return activoInactivo;
} 

let [activos, inactivos ] = funcionContadora(miObjeto);

let mensaje = `Personas Activas: ${activos} --- Personas Inactivas: ${inactivos}`
let totalActivos = document.getElementById("activos");
totalActivos.innerHTML = mensaje;


console.log("\nEJERCICIO 7")
console.log("Para este ejercicio igual utilice reduce")