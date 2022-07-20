
const horaApi = async() => {

    try {
        const respuesta = await fetch('http://worldtimeapi.org/api/timezone/America/Mexico_City')
        const { datetime } = await respuesta.json();

        // console.log(datetime);
        //Transformando la data al formato pedido
        const [fecha, hora] = dateTimeTransform( datetime );

        console.log("Fecha: " + fecha);
        console.log("Hora: " + hora);
    } catch (error) {
        console.log('Ha ocurrido un error durante la peticion a la API: ' + error)
    }
}

const dateTimeTransform = ( datetime ) => {

    const fechaHora = datetime.split('T');
    return fechaHora 
}

console.log( horaApi() );

