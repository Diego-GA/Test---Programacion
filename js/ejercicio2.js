
const horaApi = async() => {

    try {
        const respuesta = await fetch('http://worldtimeapi.org/api/timezone/America/Mexico_City')
        const { datetime } = await respuesta.json();

        //Transformando la data al formato pedido
        const [fecha, hora] = dateTimeTransform( datetime );

        const horaHtml = document.getElementById("hora");
        horaHtml.innerHTML = `Fecha: ${fecha} ------ Hora: ${hora.slice(0,8) }`;
    } catch (error) {
        console.log('Ha ocurrido un error durante la peticion a la API: ' + error)
    }
}

const dateTimeTransform = ( datetime ) => {

    const fechaHora = datetime.split('T');
    return fechaHora 
}

console.log("\nEJERCICIO 2");
console.log("Para el segundo use una funcion asincrona para la peticion, luego hice una desestruturacion del datetime que venia en el JSON y con un metodo manipule la data al formato pedidio")
console.log(horaApi())




