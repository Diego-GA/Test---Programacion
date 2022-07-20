
let calificaciones = [
    {calificacion:80},
    {calificacion:40},
    {calificacion:90}
]

const calcularPromedio = ( arreglo ) => {

    const suma = arreglo.reduce( (a, b) => a += b.calificacion, 0)
    const promedio = document.getElementById("promedio");
    promedio.innerHTML = `${ suma / arreglo.length }`

    return suma / arreglo.length;
}

console.log("\nEJERCICIO 4")
console.log("Para este ejercicio me apoye de la funcion reduce, el cual me facilito sumar las calificaciones y a partir de el generar el entero");