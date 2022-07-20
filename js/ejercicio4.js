
let calificaciones = [
    {calificacion:80},
    {calificacion:40},
    {calificacion:90}
]

const calcularPromedio = ( arreglo ) => {

    const suma = arreglo.reduce( (a, b) => a += b.calificacion, 0)

    return suma / arreglo.length;
}
 
console.log( calcularPromedio( calificaciones ) )